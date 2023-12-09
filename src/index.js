/* eslint-disable */
require("./style.css");
const Player = require("./Player");
const PlayerAI = require("./PlayerAI");
const Render = require("./Render");
const RunnerUtils = require("./RunnerUtils");

async function game() {
    // game setup
    const player = new Player();
    const playerAI = new PlayerAI();
    document.getElementById(
        "name-container"
    ).innerHTML = `<div>${player.name}</div><div>${playerAI.name}</div>`;
    document
        .getElementById("board-space")
        .append(player.boardDOM, playerAI.boardDOM);

    // Generate the footer that the user will use to set pieces
    const footer = document.getElementById("footer");
    footer.append(
        Render.generateBottomPieces(true), // true enables player drag
        Render.generateBottomPieces()
    );
    // create drag event listeners
    const allUserBlocks = document.querySelectorAll('[draggable="true"');
    const dragBank = [];
    for (block of allUserBlocks) {
        dragBank.push(Render.loadDrag(block, player));
    }
    await Promise.all(dragBank);

    // Game Runner
    while (!player.board.hasLost() && !playerAI.board.hasLost()) {
        await RunnerUtils.opponentRecieveAttack(
            await Render.coordinateAttack(playerAI.boardDOM),
            playerAI
        );
        if (!playerAI.board.hasLost())
            await RunnerUtils.playerRecieveAttack(player, playerAI);
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
