import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("Moving tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    xit("moves left", () => {
        board.drop(Tetromino.T_SHAPE);
        board.block.moveLeft();

        expect(board.toString()).to.equalShape(
            `...T......
         ..TTT.....
         ..........
         ..........
         ..........
         ..........`
        );
    });



    // a falling tetromino can be moved left
    // a falling tetromino can be moved right
    // a falling tetromino can be moved down
    // it cannot be moved left beyond the board
    // it cannot be moved right beyond the board
    // it cannot be moved down beyond the board (will stop falling)
    // it cannot be moved left through other blocks
    // it cannot be moved right through other blocks
    // it cannot be moved down through other blocks (will stop falling)
});