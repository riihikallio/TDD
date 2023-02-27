import { expect } from "chai";
import { daysUntilChristmas } from "../src/testable1.mjs";

describe("Testable 1: days until Christmas", () => {
  it("same year", () => {
    let date = new Date("2023-02-27T18:00:00")
    expect(daysUntilChristmas(date)).to.equal(301);
  });

  it("next year", () => {
    let date = new Date("2025-12-28T18:00:00")
    expect(daysUntilChristmas(date)).to.equal(362);
  });
});
