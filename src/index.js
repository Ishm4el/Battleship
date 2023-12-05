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

function playerBoardShot(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    if (tile.classList.contains("board-tile-ship")) {
        tile.classList.remove("board-tile-ship");
        tile.classList.add("board-tile-ship-shot");
    } else {
        tile.classList.remove("board-tile");
        tile.classList.add("board-tile-shot");
    }
}

function flushShip(board, ar) {
    ar.forEach((coord) => {
        playerBoardShot(board, coord);
    });
}

async function coordinateAttack(board) {
    let coord;
    const tiles = board.querySelectorAll(".board-tile");

    await new Promise((myResolve) => {
        tiles.forEach((node) => {
            node.addEventListener("click", () => {
                node.classList.remove("board-tile");
                node.classList.add("board-tile-shot");
                if (node.classList.contains("board-tile-ship")) {
                    node.classList.remove("board-tile-ship");
                    node.classList.remove("board-tile-shot");
                    node.classList.add("board-tile-ship-shot");
                }
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
        const playerShoot = await coordinateAttack(playerAI.boardDOM);
        playerAI.board.recieveAttack(playerShoot);

        let enemyLandedHit = null;
        let aiCoordinatedAttack = null;
        while (enemyLandedHit === null) {
            console.log("ai making shot");
            aiCoordinatedAttack = playerAI.generateAttack();
            enemyLandedHit = player.board.recieveAttack(aiCoordinatedAttack);
        }
        console.log(enemyLandedHit);
        if (enemyLandedHit instanceof Array) {
            console.log(enemyLandedHit[0]);
            playerAI.flushMarks(enemyLandedHit);
            flushShip(player.boardDOM, enemyLandedHit);
        } else if (enemyLandedHit instanceof Object) {
            playerAI.markAttack(enemyLandedHit);
            playerBoardShot(player.boardDOM, enemyLandedHit);
        } else {
            playerBoardShot(player.boardDOM, aiCoordinatedAttack);
        }
    }
    if (playerAI.board.hasLost()) {
        console.log(`${player.name} has won!`);
    } else if (player.board.hasLost()) {
        console.log(`${playerAI.name} has won!`);
    } else throw "Nobody won??";
    document.querySelectorAll(".board-tile").forEach((node) => {
        node.classList.remove("board-tile");
        node.classList.add("board-tile-finished");
    });
}

game();
