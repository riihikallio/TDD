import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

let prep = `
    ..........
    ..........
    ...X..X...
    ...X..X...
    ...X..X...
    ...X..X...`;

describe("Corner cases", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    it("move, tick, rotate, tick", () => {
        board.drop(Tetromino.T_SHAPE);
        board.move(-1);
        board.tick();
        board.rotateRight();
        board.tick();

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...T......
         ...TT.....
         ...T......
         ..........`
        );
    });

    it("don't rotate if confined", () => {
        board.init(prep);
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight();
        board.tick();
        board.tick();
        board.rotateRight();

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...XT.X...
         ...XTTX...
         ...XT.X...
         ...X..X...`
        );
    });

});