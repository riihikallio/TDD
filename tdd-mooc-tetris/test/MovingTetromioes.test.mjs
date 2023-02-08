import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

let prep = `
    X........X
    X........X
    X........X
    X........X
    X........X
    XXXXXXXXXX`;

describe("Moving tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    it("moves left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.move(-1);

        expect(board.toString()).to.equalShape(
        `...T......
         ..TTT.....
         ..........
         ..........
         ..........
         ..........`
        );
    });


    it("moves right", () => {
        board.drop(Tetromino.T_SHAPE);
        board.move(+1);

        expect(board.toString()).to.equalShape(
        `.....T....
         ....TTT...
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("moves down", () => {
        board.drop(Tetromino.T_SHAPE);
        board.fall();

        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ....T.....
           ...TTT....`
        );
    });

    it("doesn't move left off the board", () => {
        board.drop(Tetromino.T_SHAPE);
        for (let i = 0; i < 10; i++) {
            board.move(-1);
        }

        expect(board.toString()).to.equalShape(
        `.T........
         TTT.......
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("doesn't move right off the board", () => {
        board.drop(Tetromino.T_SHAPE);
        for (let i = 0; i < 10; i++) {
            board.move(+1);
        }

        expect(board.toString()).to.equalShape(
        `........T.
         .......TTT
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("board initialization", () => {
        board.init(prep);
        expect(board.toString()).to.equalShape(
        `X........X
         X........X
         X........X
         X........X
         X........X
         XXXXXXXXXX`
        );
    });

    // it cannot be moved left through other blocks
    // it cannot be moved right through other blocks
    // it cannot be moved down through other blocks (will stop falling)
});