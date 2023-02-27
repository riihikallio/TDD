import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Scoreboard } from "../src/Scoreboard.mjs";
import { Arika_I } from "../src/Arika_I.mjs";


describe("Scoreboard functionality", () => {
    let scoring;
    beforeEach(() => {
        scoring = new Scoreboard();
    });
    
    it("Starts at zero", () => {
      expect(scoring.toString()).to.equal("0");
    });
    
    it("No lines", () => {
        scoring.update(0);
        expect(scoring.toString()).to.equal("0");
      });
    
    it("One line", () => {
        scoring.update(1);
        expect(scoring.toString()).to.equal("40");
      });
      
      it("Two lines", () => {
        scoring.update(2);
        expect(scoring.toString()).to.equal("100");
      });
      
      it("Three lines", () => {
        scoring.update(3);
        expect(scoring.toString()).to.equal("300");
      });
      
      it("Four lines", () => {
        scoring.update(4);
        expect(scoring.toString()).to.equal("1200");
      });
      
      it("Addition", () => {
        scoring.update(4);
        scoring.update(3);
        scoring.update(2);
        scoring.update(1);
        scoring.update(0);
        expect(scoring.toString()).to.equal("1640");
      });

      let prep3 = `
      ..........
      ..........
      XXXX.XXXXX
      XXXX.XXX.X
      XXXX.XXXXX
      XXXX.XXXXX`;

      it("From board", () => {
        let board = new Board(10, 6);
        board.init(prep3);
        board.drop(new Arika_I());
        board.rotate(1);
        board.fall();

        expect(board.scoring.toString()).to.equal("300");
    });

  });