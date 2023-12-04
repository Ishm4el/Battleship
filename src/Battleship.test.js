const Ship = require("./Ship");
const Gameboard = require("./Gameboard");
const Player = require("./Player");
const PlayerAI = require("./PlayerAI");

// Testing the Ship
test("the hit function", () => {
    const testShip = new Ship(2);
    testShip.hit(0);
    testShip.hit(0);
    expect(testShip.isSunk()).toBe(true);
});

test("the hit function", () => {
    const testShip = new Ship(3);
    testShip.hit(0);
    testShip.hit(0);
    expect(testShip.isSunk()).toBe(false);
});

test("recieveAttack", () => {
    const testGameboard = new Gameboard();
    testGameboard.recieveAttack({ y: 1, x: 0 });
    testGameboard.recieveAttack({ y: 1, x: 1 });
    testGameboard.recieveAttack({ y: 1, x: 2 });
    expect(testGameboard.ships[1].isSunk()).toBe(true);
});

test("hasLost false", () => {
    const testGameboard = new Gameboard();
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < testGameboard.ships[i].ship.size; j++) {
            testGameboard.recieveAttack({ y: i, x: j });
        }
    }
    expect(testGameboard.hasLost()).toBe(true);
});

test("prevent appending out of bounds", () => {
    const boat = new Ship(2);
    expect(() => {
        boat.appendCoord({ x: 0, y: 0 });
        boat.appendCoord({ x: 1, y: 0 });
        boat.appendCoord({ x: 2, y: 0 });
    }).toThrow("The coords of the ship are beyond");
});

// Testing the Player
test("player board exist", () => {
    const player = new Player("Zoku");
    const ai = new PlayerAI();
    expect(player.name).toBe("Zoku");
    expect(ai.name).toBe("CPU-AI");
});

test("AI generate Number", () => {
    const ai = new PlayerAI();
    const generatedValue = ai.generateAttack();
    expect(generatedValue.x).toBeGreaterThan(-1);
    expect(generatedValue.x).toBeLessThan(10);
    expect(generatedValue.y).toBeGreaterThan(-1);
    expect(generatedValue.y).toBeLessThan(10);
});

test("AI single strike", () => {
    const player = new Player("Zoku");
    const ai = new PlayerAI();
    let hasNotHit = true;
    let striked = undefined;
    while (hasNotHit) {
        striked = player.board.recieveAttack(ai.generateAttack());
        if (striked !== undefined) {
            hasNotHit = false;
        }
    }
    expect(striked).toBeInstanceOf(Object);
});

test("AI drop a player ship", () => {
    const player = new Player("Zoku");
    const ai = new PlayerAI();
    let hasNotDestroyed = true;
    let striked = null;
    while (hasNotDestroyed) {
        while (striked === null) {
            striked = player.board.recieveAttack(ai.generateAttack());
        }
        if (striked instanceof Array) {
            hasNotDestroyed = false;
            ai.flushMarks(striked);
        } else if (striked instanceof Object) {
            ai.markAttack(striked);
        }
        striked = null;
    }
});
