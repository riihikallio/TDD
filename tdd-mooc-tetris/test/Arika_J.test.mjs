import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Arika_J } from "../src/Arika_J.mjs";

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

describe("The Arika_J shape", () => {
    const shape = new Arika_J();
  
    it("initial orientation", () => {
      expect(shape.toString()).to.equalShape(
        `...
         JJJ
         ..J`
      );
    });
  
    it("can be rotated right/clockwise", () => {
      expect(shape.rotateRight().toString()).to.equalShape(
        `.J.
         .J.
         JJ.`
      );
    });
  
    it("can be rotated left/counter-clockwise", () => {
      expect(shape.rotateLeft().toString()).to.equalShape(
        `.JJ
         .J.
         .J.`
      );
    });
  
    it("can be rotated left/counter-clockwise twice", () => {
      expect(shape.rotateLeft().rotateLeft().toString()).to.equalShape(
        `...
         J..
         JJJ`
      );
    });

    it("has 4 distinct orientation", () => {
        expect(distinctOrientations(shape).size).to.equal(4);
      });
});  

describe("When an Arika_J is dropped", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(new Arika_J());
    });

    it("it starts from the top middle", () => {
        expect(board.toString()).to.equalShape(
            `...JJJ....
             .....J....
             ..........
             ..........
             ..........
             ..........`
            );
    });
});