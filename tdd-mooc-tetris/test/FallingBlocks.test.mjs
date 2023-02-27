import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_O } from "../src/Arika_O.mjs";

describe("Falling Arika blocks", () => {
  let board;
  beforeEach(() => {
    board = new Board(4, 4);
  });

  it("The board starts empty", () => {
    expect(board.toString()).to.equalShape(
      `....
       ....
       ....
       ....`
    );
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop(new Arika_O());
    });

    it("it starts from the top middle", () => {
      expect(board.toString()).to.equalShape(
        `.OO.
         .OO.
         ....
         ....`
       );
    });

    it("it moves down one row per tick", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `....
         .OO.
         .OO.
         ....`
      );
    });

    it("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(() => board.drop(new Arika_O())).to.throw("already falling");
      const after = board.toString();
      expect(after).to.equal(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop(new Arika_O());
      board.tick();
      board.tick();
    });

    it("it is still moving on the last row", () => {
      expect(board.toString()).to.equalShape(
        `....
         ....
         .OO.
         .OO.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `....
         ....
         .OO.
         .OO.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });


  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop(new Arika_O());
      board.tick();
      board.tick();
      board.tick();
      board.drop(new Arika_O());
    });

    it("it is still moving on the row above the other block", () => {
      expect(board.toString()).to.equalShape(
        `.OO.
         .OO.
         .OO.
         .OO.`
      );
      expect(
        board.hasFalling(),
        "the player should still be able to move the block"
      ).to.be.true;
    });

    it("it stops when it hits the other block", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `.OO.
         .OO.
         .OO.
         .OO.`
      );
      expect(board.hasFalling(), "the block should stop moving").to.be.false;
    });
  });
});
