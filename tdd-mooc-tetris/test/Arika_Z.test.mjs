import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_Z } from "../src/Arika_Z.mjs";

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

describe("The Arika_Z shape", () => {
    const shape = new Arika_Z();
  
    it("initial orientation", () => {
      expect(shape.toString()).to.equalShape(
        `...
         ZZ.
         .ZZ`
      );
    });
  
    it("can be rotated right/clockwise", () => {
      expect(shape.rotateRight().toString()).to.equalShape(
        `..Z
         .ZZ
         .Z.`
      );
    });
  
    it("can be rotated left/counter-clockwise", () => {
      expect(shape.rotateLeft().toString()).to.equalShape(
        `..Z
         .ZZ
         .Z.`
      );
    });
  
    it("can be rotated left/counter-clockwise twice", () => {
      expect(shape.rotateLeft().rotateLeft().toString()).to.equalShape(
        `...
         ZZ.
         .ZZ`
         );
        });

    it("has 2 distinct orientation", () => {
        expect(distinctOrientations(shape).size).to.equal(2);
      });
});  

describe("When an Arika_Z is dropped", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(new Arika_Z());
    });

    it("it starts from the top middle", () => {
        expect(board.toString()).to.equalShape(
            `...ZZ.....
             ....ZZ....
             ..........
             ..........
             ..........
             ..........`
            );
    });
});