import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_O } from "../src/Arika_O.mjs";

function distinctOrientations(shape) {
    const distinct = new Set();
    let goingRight = shape;
    let goingLeft = shape;
    for (let i = 0; i < 10; i++) {
      distinct.add(goingRight.toString());
      goingRight = goingRight.rotateRight();
      distinct.add(goingLeft.toString());
      goingLeft = goingLeft.rotateLeft();
    }
    return distinct;
  }  

describe("The Arika_O shape", () => {
    const shape = new Arika_O();
  
    it("initial orientation", () => {
      expect(shape.toString()).to.equalShape(
        `...
         .OO
         .OO`
      );
    });
  
    it("cannot be rotated right/clockwise", () => {
      expect(shape.rotateRight().toString()).to.equalShape(
        `...
         .OO
         .OO`
      );
    });
  
    it("cannot be rotated left/counter-clockwise", () => {
      expect(shape.rotateLeft().toString()).to.equalShape(
        `...
         .OO
         .OO`
      );
    });

    it("has 1 distinct orientation", () => {
        expect(distinctOrientations(shape).size).to.equal(1);
      });
});  

describe("When an Arika_O is dropped", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(new Arika_O());
    });

    it("it starts from the top middle", () => {
        expect(board.toString()).to.equalShape(
            `..........
             ....OO....
             ....OO....
             ..........
             ..........
             ..........`
            );
    });
});