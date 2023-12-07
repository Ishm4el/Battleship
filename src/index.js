/* eslint-disable */
require("./style.css");
const Player = require("./Player");
const PlayerAI = require("./PlayerAI");
const Render = require("./Render");

async function game() {
    const player = new Player();
    player.board.presetPlaceShips(0);
    const playerAI = new PlayerAI();
    player.boardDOM = Render.generateBoard();
    playerAI.boardDOM = Render.generateBoard();
    player.board.ships.forEach((ship) => {
        Render.addShip(player.boardDOM, ship.getCoords());
    });
    const boardSpace = document.getElementById("board-space");
    boardSpace.appendChild(player.boardDOM);
    boardSpace.appendChild(playerAI.boardDOM);
    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        const playerShoot = await Render.coordinateAttack(playerAI.boardDOM);
        const boardReact = playerAI.board.recieveAttack(playerShoot);
        if (boardReact instanceof Array) {
            boardReact.forEach((coord) => {
                Render.shipHit(playerAI.boardDOM, coord);
            });
        } else if (boardReact instanceof Object)
            Render.shipHit(playerAI.boardDOM, boardReact);

        let enemyLandedHit = null;
        let aiCoordinatedAttack = null;
        while (enemyLandedHit === null) {
            aiCoordinatedAttack = playerAI.generateAttack();
            enemyLandedHit = player.board.recieveAttack(aiCoordinatedAttack);
        }
        if (enemyLandedHit instanceof Array) {
            playerAI.flushMarks(enemyLandedHit);
            Render.flushShip(player.boardDOM, enemyLandedHit);
        } else if (enemyLandedHit instanceof Object) {
            playerAI.markAttack(enemyLandedHit);
            Render.playerBoardShot(player.boardDOM, enemyLandedHit);
        } else {
            Render.playerBoardShot(player.boardDOM, aiCoordinatedAttack);
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

const body = document.getElementsByTagName("body")[0];
const footer = document.getElementById("footer");
playerFooter = Render.generateBottomPieces();
playerFooter.appendChild(Render.generateDirectionButton());
footer.appendChild(playerFooter);
footer.appendChild(Render.generateBottomPieces());
game();
