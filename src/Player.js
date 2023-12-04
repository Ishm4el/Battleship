/* eslint-disable no-fallthrough */
const Gameboard = require("./Gameboard");

class Player {
    constructor(playerName = "Player") {
        this.name = playerName;
        this.board = new Gameboard();
    }
}

module.exports = Player;
