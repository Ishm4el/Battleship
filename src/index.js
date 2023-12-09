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
    document
        .getElementById("board-space")
        .append(player.boardDOM, playerAI.boardDOM);

    // Generate the footer that the user will be able use
    const footer = document.getElementById("footer");
    footer.append(
        Render.generateBottomPieces(true), // true enables player drag
        Render.generateBottomPieces()
    );

    // create drag event listeners
    const allUserBlocks = document.querySelectorAll('[draggable="true"');

    const loadDrag = async (block) =>
        new Promise((res, rej) => {
            // tile functions
            let tiles = document.querySelectorAll(
                ".board:first-child .board-tile"
            );
            // reset the tiles
            const cleanTiles = function () {
                tiles.forEach((tile) => {
                    tile.removeEventListener("dragover", dragoverfoo);
                    tile.removeEventListener("drop", dropfoo);
                });
            };
            // disables the dragover defaults
            const dragoverfoo = function (e) {
                e.preventDefault();
            };
            // event triggers on block drop on tile
            const dropfoo = function (e) {
                const direction = Number(
                    document.querySelector(".direction-button").dataset
                        .direction
                );
                const id = Number(block.dataset.id);
                // const id = Number(e.target.dataset.dropped);
                const y = Number(e.target.dataset.column);
                const x = Number(e.target.dataset.row);
                if (player.board.validatePlacement(direction, id, y, x)) {
                    console.log(id);
                    // remove all the draggable rules on the block
                    block.removeEventListener("dragstart", dragstartfoo);
                    block.setAttribute("draggable", "false");
                    block.classList.remove("draggable");

                    // place the ship on the board
                    player.board.placeShip(direction, id, y, x);
                    Render.addShip(
                        player.boardDOM,
                        player.board.ships[id].getCoords()
                    );
                    cleanTiles();
                    res();
                } else {
                    block.addEventListener("dragstart", dragstartfoo);
                    cleanTiles();
                }
            };

            const dragendfoo = function (e) {
                block.removeEventListener("dragstart", dragstartfoo);
                block.removeEventListener("dragend", dragendfoo);
                cleanTiles();
                e.preventDefault();
            };

            const dragstartfoo = function addTransferData(e) {
                block.removeEventListener("dragstart", addTransferData);
                // block.addEventListener("dragend", dragendfoo);
                tiles = document.querySelectorAll(
                    ".board:first-child .board-tile"
                );

                console.log("dragstart");

                const direction = Number(
                    document.querySelector(".direction-button").dataset
                        .direction
                );
                e.dataTransfer.setData("id", e.target.dataset.id);
                if (direction === 0) {
                    [...tiles]
                        .filter((tile) => {
                            if (
                                Number(tile.dataset.row) <=
                                    9 - this.dataset.size &&
                                !tile.classList.contains("board-tile-ship")
                            )
                                return true;
                            else return false;
                        })
                        .forEach((tile) => {
                            tile.dataset.dropped = this.dataset.id;
                            tile.addEventListener("dragover", dragoverfoo);
                            tile.addEventListener("drop", dropfoo);
                        });
                } else {
                    [...tiles]
                        .filter((tile) => {
                            if (
                                Number(tile.dataset.column) <=
                                    9 - block.dataset.size &&
                                !tile.classList.contains("board-tile-ship")
                            )
                                return true;
                            else return false;
                        })
                        .forEach((tile) => {
                            tile.dataset.dropped = block.dataset.id;
                            tile.addEventListener("dragover", dragoverfoo);
                            tile.addEventListener("drop", dropfoo);
                        });
                }
            };

            block.addEventListener("dragstart", dragstartfoo);
        }).then(
            () => {
                console.log("minBlock");
            },
            async (block) => {
                console.log("in reject");
                return await loadDrag(block);
            }
        );

    const dragBank = [];

    for (block of allUserBlocks) {
        dragBank.push(loadDrag(block));
    }
    await Promise.all(dragBank).then(() => {
        console.log("We made it!");
    });

    console.log("Running!");
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
