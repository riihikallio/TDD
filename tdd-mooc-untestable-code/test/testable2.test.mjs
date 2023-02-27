import { expect } from "chai";
import { diceHandValue, diceHandValueWithParams, diceRoll } from "../src/testable2.mjs";

describe("Testable 2: a dice game", () => {
  it("pair", () => {
    expect(diceHandValueWithParams(3, 3)).to.equal(103);
  });

  it("small, large", () => {
    expect(diceHandValueWithParams(2, 5)).to.equal(5);
  });

  it("large, small", () => {
    expect(diceHandValueWithParams(4, 1)).to.equal(4);
  });

  it("dice roll", () => {
    let low = 7;
    let high = 0;
    for (let i = 0; i < 1000; i++) {
      let die = diceRoll();
      low = (low < die) ? low : die;
      high = (high > die) ? high : die;
    }
    expect(low).to.equal(1);
    expect(high).to.equal(6);
  });

  it("original interface", () => {
    expect(diceHandValue()).to.be.a("number", "Not a number!");
    expect(diceHandValue()).to.be.within(2, 106, "Out of range!")
  });
});
