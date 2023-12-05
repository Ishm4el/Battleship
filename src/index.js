/* eslint-disable */
require("./style.css");
const Player = require("./Player");
const PlayerAI = require("./PlayerAI");

function generateBoard() {
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 10; i++) {
        const column = document.createElement("div");
        column.classList.add("board-row");
        board.appendChild(column);
        for (let j = 0; j < 10; j++) {
            const row = document.createElement("div");
            row.classList.add("board-tile");
            row.dataset.column = i;
            row.dataset.row = j;
            column.appendChild(row);
        }
    }
    return board;
}

function addShip(board, ship) {
    ship.forEach(function fillTile(coord) {
        const tile = board.querySelector(
            `[data-column="${coord.y}"][data-row="${coord.x}"]`
        );
        tile.classList.remove("board-tile");
        tile.classList.add("board-tile-ship");
    });
}

async function markAttack(board) {
    let coord;
    const tiles = board.querySelectorAll(".board-tile");

    await new Promise((myResolve) => {
        tiles.forEach((node) => {
            node.addEventListener("click", () => {
                node.classList.remove("board-tile");
                node.classList.add("board-tile-shot");
                tiles.forEach((node) => {
                    node.replaceWith(node.cloneNode(false));
                });
                myResolve({ y: node.dataset.column, x: node.dataset.row });
            });
        });
    }).then((value) => {
        coord = value;
    });
    return coord;
}

async function game() {
    const player = new Player();
    const playerAI = new PlayerAI();
    const body = document.getElementsByTagName("body")[0];
    player.boardDOM = generateBoard();
    playerAI.boardDOM = generateBoard();
    player.board.ships.forEach((ship) => {
        addShip(player.boardDOM, ship.getCoords());
    });
    body.appendChild(player.boardDOM);
    body.appendChild(playerAI.boardDOM);
    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        const playerShoot = await markAttack(playerAI.boardDOM);
        playerAI.board.recieveAttack(playerShoot);
    }
    if (playerAI.board.hasLost()) {
        console.log(`${player.name} has won!`);
    } else if (player.board.hasLost()) {
        console.log(`${playerAI.name} has won!`);
    } else throw "Nobody won??";
}

game();
