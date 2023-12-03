/* eslint-disable no-fallthrough */
const Gameboard = require("./Gameboard");

class Player {
    #playerAI;
    #DetectedAttacks = [];
    constructor(playerName) {
        const checkPlayerName = playerName === undefined;
        this.#playerAI = checkPlayerName ? true : false;
        this.playerName = checkPlayerName ? "CPU-AI" : playerName;
        this.playerBoard = new Gameboard();
    }

    generateAttack() {
        if (this.#playerAI) {
            if (this.#DetectedAttacks.length === 0)
                return {
                    x: Math.floor(Math.random() * 10),
                    y: Math.floor(Math.random() * 10),
                };
            else {
                const smartAttack = this.#smartGenerateAttack(
                    Math.floor(Math.random() * 4)
                );
                return smartAttack === undefined
                    ? this.#smartGenerateAttack(0)
                    : smartAttack;
            }
        } else throw "Non-AI player is making a move!";
    }

    #smartGenerateAttack(position) {
        const lastHit =
            this.#DetectedAttacks[
                Math.floor(Math.random() * this.#DetectedAttacks.length)
            ];
        switch (position) {
            case 0:
                if (lastHit.y !== 9)
                    return {
                        y: lastHit.y + 1,
                        x: lastHit.x,
                        smart: true,
                    };
            case 1:
                if (lastHit.y !== 0)
                    return {
                        y: lastHit.y - 1,
                        x: lastHit.x,
                        smart: true,
                    };
            case 2:
                if (lastHit.x !== 9)
                    return {
                        y: lastHit.y,
                        x: lastHit.x + 1,
                        smart: true,
                    };
            case 3:
                if (lastHit.x !== 0)
                    return {
                        y: lastHit.y,
                        x: lastHit.x - 1,
                        smart: true,
                    };
            default:
                return undefined;
        }
    }

    markAttack(coord) {
        if (this.#playerAI) {
            this.#DetectedAttacks.push(coord);
        }
    }

    flushMarks(sunkedShip) {
        this.#DetectedAttacks = this.#DetectedAttacks.filter((coord) => {
            for (let i = 0; i < sunkedShip.length; i++) {
                if (
                    coord.x === sunkedShip[i].x &&
                    coord.y === sunkedShip[i].y
                ) {
                    sunkedShip.slice(i, 1);
                    return false;
                }
            }
            return true;
        });
    }

    getDetected() {
        return this.#DetectedAttacks;
    }
}

module.exports = Player;
