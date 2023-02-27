import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_T } from "../src/Arika_T.mjs";

let prep = `
    X........X
    X........X
    X........X
    X........X
    X........X
    XXXXXXXXXX`;

describe("Moving Arika shapes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    it("moves left", () => {
        board.drop(new Arika_T());
        console.log("####### Arika left");
        board.move(-1);

        expect(board.toString()).to.equalShape(
        `..TTT.....
         ...T......
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("moves right", () => {
        board.drop(new Arika_T());
        console.log("####### Arika right");
        board.move(+1);

        expect(board.toString()).to.equalShape(
        `....TTT...
         .....T....
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("moves down", () => {
        board.drop(new Arika_T());
        board.fall();

        expect(board.toString()).to.equalShape(
        `..........
         ..........
         ..........
         ..........
         ...TTT....
         ....T.....`
        );
    });

    it("doesn't move left off the board", () => {
        board.drop(new Arika_T());
        for (let i = 0; i < 10; i++) {
            board.move(-1);
        }

        expect(board.toString()).to.equalShape(
        `TTT.......
         .T........
         ..........
         ..........
         ..........
         ..........`
        );
    });

    it("doesn't move right off the board", () => {
        board.drop(new Arika_T());
        for (let i = 0; i < 10; i++) {
            board.move(+1);
        }

        expect(board.toString()).to.equalShape(
        `.......TTT
         ........T.
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

    it("stops on obstacle on the left", () => {
        board.init(prep);
        board.drop(new Arika_T());
        for (let i=0; i<5; i++) {
            board.move(-1);
        }
        expect(board.toString()).to.equalShape(
        `XTTT.....X
         X.T......X
         X........X
         X........X
         X........X
         XXXXXXXXXX`
        );
    });

    it("stops on obstacle on the right", () => {
        board.init(prep);
        board.drop(new Arika_T());
        for (let i=0; i<5; i++) {
            board.move(1);
        }
        expect(board.toString()).to.equalShape(
        `X.....TTTX
         X......T.X
         X........X
         X........X
         X........X
         XXXXXXXXXX`
        );
    });

    it("stops on obstacle on the bottom", () => {
        board.init(prep);
        board.drop(new Arika_T());
        board.fall();
        expect(board.toString()).to.equalShape(
        `X........X
         X........X
         X........X
         X..TTT...X
         X...T....X
         XXXXXXXXXX`
        );
    });

});