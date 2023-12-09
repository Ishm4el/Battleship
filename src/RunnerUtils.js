const Render = require("./Render");

// Game Runner Utils
const opponentRecieveAttack = async function (targeted, playerAI) {
    const boardReact = playerAI.board.recieveAttack(targeted);
    if (boardReact instanceof Array) {
        boardReact.forEach((coord) => {
            Render.shipHit(playerAI.boardDOM, coord);
        });
    } else if (boardReact instanceof Object)
        Render.shipHit(playerAI.boardDOM, boardReact);
};
const playerRecieveAttack = async (player, playerAI) => {
    let aiCoordinatedAttack = null; // the generated coordinated attack
    let enemyLandedHit = null; // the hit ship checker
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
};

module.exports = { opponentRecieveAttack, playerRecieveAttack };
