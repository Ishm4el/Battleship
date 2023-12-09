// Game Runner Utils
const Render = require("./Render");

// Player Turn - Player attacks AI
const opponentRecieveAttack = async function (targeted, playerAI) {
    const boardReact = await playerAI.board.recieveAttack(targeted);
    if (boardReact instanceof Array) {
        boardReact.forEach((coord) => {
            Render.shipHit(playerAI.boardDOM, coord);
        });
    } else if (boardReact instanceof Object)
        if (boardReact.shipHit !== false)
            Render.shipHit(playerAI.boardDOM, boardReact);
};

// AI Turn - AI attacks Player
const playerRecieveAttack = async (player, playerAI) => {
    let enemyLandedHit = null; // the hit ship checker

    while (enemyLandedHit === null) {
        enemyLandedHit = await player.board.recieveAttack(
            playerAI.generateAttack()
        );
    }
    if (enemyLandedHit instanceof Array) {
        playerAI.flushMarks(enemyLandedHit);
        Render.flushShip(player.boardDOM, enemyLandedHit);
    } else if (enemyLandedHit instanceof Object) {
        if (enemyLandedHit.shipHit !== false)
            playerAI.markAttack(enemyLandedHit);
        Render.playerBoardShot(player.boardDOM, enemyLandedHit);
    }
};

module.exports = { opponentRecieveAttack, playerRecieveAttack };
