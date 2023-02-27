import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_T } from "../src/Arika_T.mjs";

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

describe("The Arika_T shape", () => {
    const shape = new Arika_T();
  
    it("initial orientation", () => {
      expect(shape.toString()).to.equalShape(
        `...
         TTT
         .T.`
      );
    });
  
    it("can be rotated right/clockwise", () => {
      expect(shape.rotateRight().toString()).to.equalShape(
        `.T.
         TT.
         .T.`
      );
    });
  
    it("can be rotated left/counter-clockwise", () => {
      expect(shape.rotateLeft().toString()).to.equalShape(
        `.T.
         .TT
         .T.`
      );
    });
  
    it("can be rotated left/counter-clockwise twice", () => {
      expect(shape.rotateLeft().rotateLeft().toString()).to.equalShape(
        `...
         .T.
         TTT`
      );
    });

    it("has 4 distinct orientation", () => {
        expect(distinctOrientations(shape).size).to.equal(4);
      });
});  

describe("When an Arika_T is dropped", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(new Arika_T());
    });

    it("it starts from the top middle", () => {
        expect(board.toString()).to.equalShape(
            `...TTT....
             ....T.....
             ..........
             ..........
             ..........
             ..........`
            );
    });
});