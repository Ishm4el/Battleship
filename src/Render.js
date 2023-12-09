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

function shipHit(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    tile.classList.remove("board-tile-ship");
    tile.classList.add("board-tile-ship-shot");
}

function shipDestroyed(board, coord) {
    const tile = board.querySelector(
        `[data-column="${coord.y}"][data-row="${coord.x}"]`
    );

    tile.classList.remove("board-tile-ship");
    tile.classList.remove("board-tile-ship-shot");
    tile.classList.add("board-tile-ship-destroyed");
}

function flushShip(board, coords, side) {
    flushShipFooter(coords, side);
    coords.forEach((coord) => {
        shipDestroyed(board, coord);
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

function generateBottomPieces(player = false) {
    const container = document.createElement("div");
    container.classList.add("footer-container");
    const piecesContainer = document.createElement("div");
    piecesContainer.classList.add("pieces-container");
    const topRow = document.createElement("div");
    topRow.classList.add("pieces-top-row");
    const botRow = document.createElement("div");
    botRow.classList.add("pieces-bot-row");

    const blockGenerator = (size) => {
        const block = document.createElement("div");
        block.classList.add("pieces-block");
        if (player === true) {
            block.classList.add("draggable");
            block.setAttribute("draggable", "true");
        }

        for (let i = 0; i < size; i++) {
            const tile = document.createElement("div");
            tile.classList.add("board-tile-footer");
            block.appendChild(tile);
        }
        block.firstChild.classList.add("board-tile-footer-head");
        block.firstChild.innerText = "#";
        return block;
    };

    const blocks = [
        blockGenerator(2),
        blockGenerator(3),
        blockGenerator(3),
        blockGenerator(4),
        blockGenerator(5),
    ];
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].dataset.id = String(i);
    }
    blocks[0].dataset.size = "1";
    blocks[1].dataset.size = "2";
    blocks[2].dataset.size = "2";
    blocks[3].dataset.size = "3";
    blocks[4].dataset.size = "4";

    topRow.append(blocks[0], blocks[1], blocks[2]);
    botRow.append(blocks[3], blocks[4]);
    piecesContainer.append(topRow, botRow);
    container.append(piecesContainer);
    if (player === true) container.appendChild(generateDirectionButton());
    return container;
}

function flushShipFooter(coords, side) {
    const shipID = coords[0].id;
    const footerBlock =
        side === 0
            ? document.querySelectorAll(
                  `.footer-container:last-child [data-id="${shipID}"] div`
              )
            : document.querySelectorAll(
                  `.footer-container:first-child [data-id="${shipID}"] div`
              );
    footerBlock.forEach((tile) => {
        tile.classList.add("board-tile-footer-destroyed");
    });
}

function generateDirectionButton() {
    const direction = document.createElement("div");
    const directionButton = document.createElement("div");
    directionButton.innerText = "X";
    directionButton.dataset.direction = "0";
    directionButton.classList.add("direction-button");
    direction.classList.add("direction-button-container");
    directionButton.addEventListener("click", function () {
        if (this.innerText === "X") {
            this.innerText = "Y";
            this.dataset.direction = "1";
        } else if (this.innerText === "Y") {
            this.innerText = "X";
            this.dataset.direction = "0";
        }
    });
    direction.append(directionButton);
    return direction;
}

const loadDrag = async (block, player) =>
    new Promise((res) => {
        // tile functions
        let tiles = document.querySelectorAll(".board:first-child .board-tile");
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
                document.querySelector(".direction-button").dataset.direction
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
                addShip(player.boardDOM, player.board.ships[id].getCoords());
                cleanTiles();
                res();
            } else {
                block.addEventListener("dragstart", dragstartfoo);
                cleanTiles();
            }
        };

        const dragstartfoo = function addTransferData(e) {
            block.removeEventListener("dragstart", addTransferData);
            tiles = document.querySelectorAll(".board:first-child .board-tile");

            const direction = Number(
                document.querySelector(".direction-button").dataset.direction
            );
            e.dataTransfer.setData("id", e.target.dataset.id);
            if (direction === 0) {
                [...tiles]
                    .filter((tile) => {
                        if (
                            Number(tile.dataset.row) <= 9 - this.dataset.size &&
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
    });

module.exports = {
    generateBoard,
    addShip,
    shipHit,
    shipDestroyed,
    flushShip,
    coordinateAttack,
    playerBoardShot,
    generateBottomPieces,
    generateDirectionButton,
    loadDrag,
};
