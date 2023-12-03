const Ship = require("./Ship");
const Gameboard = require("./Gameboard");

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

// Testing Gameboard
test("The board in Gameboard", () => {
    const testGameboard = new Gameboard();
    console.log(testGameboard.board);
});

test("recieveAttack", () => {
    const testGameboard = new Gameboard();
    testGameboard.recieveAttack(1, 0);
    testGameboard.recieveAttack(1, 1);
    testGameboard.recieveAttack(1, 2);
    expect(testGameboard.ships[1].isSunk()).toBe(true);
});

test("hasLost false", () => {
    const testGameboard = new Gameboard();
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < testGameboard.ships[i].ship.size; j++) {
            testGameboard.recieveAttack(i, j);
        }
    }
    expect(testGameboard.hasLost()).toBe(true);
});
