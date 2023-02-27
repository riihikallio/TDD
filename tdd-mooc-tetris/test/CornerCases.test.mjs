import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_T } from "../src/Arika_T.mjs";

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
        board.drop(new Arika_T());
        board.move(-1);
        board.tick();
        board.rotate(1);
        board.tick();

        expect(board.toString()).to.equalShape(
        `..........
         ...T......
         ...TT.....
         ...T......
         ..........
         ..........`
        );
    });

    it("don't rotate right if confined", () => {
        board.init(prep);
        board.drop(new Arika_T());
        board.tick();
        board.rotate(1);
        board.tick();
        board.tick();
        board.rotate(1);

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...XT.X...
         ...XTTX...
         ...XT.X...
         ...X..X...`
        );
    });

    it("don't rotate left if confined", () => {
        board.init(prep);
        board.drop(new Arika_T());
        board.tick();
        board.move(1);
        board.rotate(0);
        board.tick();
        board.tick();
        board.rotate(0);

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ...X.TX...
         ...XTTX...
         ...X.TX...
         ...X..X...`
        );
    });

    it("left wall kick", () => {
        board.drop(new Arika_T());
        board.tick();
        board.rotate(1);
        board.move(-1);
        board.move(-1);
        board.move(-1);
        board.move(-1);
        board.tick();
        board.rotate(1);

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         .T........
         TTT.......
         ..........
         ..........`
        );
    });

    it("right wall kick", () => {
        board.drop(new Arika_T());
        board.rotate(0);
        board.move(1);
        board.move(1);
        board.move(1);
        board.move(1);
        board.move(1);
        board.tick();
        board.rotate(0);

        expect(board.toString()).to.equalShape(
        `..........
         ........T.
         .......TTT
         ..........
         ..........
         ..........`
        );
    });

});