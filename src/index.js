const Player = require("./Player");
const PlayerAI = require("./PlayerAI");

function generateBoard() {
    const board = document.createElement("div");
    for (let i = 0; i < 10; i++) {
        const column = document.createElement("div");
        board.appendChild(column);
        for (let j = 0; j < 10; j++) {
            const row = document.createElement("div");
            column.appendChild(row);
            row.classList.add("board-tile");
        }
    }
    return board;
}

function main() {
    const player = new Player();
    const playerAI = new PlayerAI();
}
