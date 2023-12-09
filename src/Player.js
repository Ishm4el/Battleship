/* eslint-disable no-fallthrough */
const Gameboard = require("./Gameboard");
const Render = require("./Render");

class Player {
    constructor(playerName = "Player") {
        this.name = playerName;
        this.board = new Gameboard();
        this.boardDOM = Render.generateBoard();
    }
}

module.exports = Player;
