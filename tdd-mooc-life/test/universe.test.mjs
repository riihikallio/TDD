import { expect } from "chai";
import { Universe } from "../src/universe.mjs";

describe("Unpack line", () => {
  let uni = new Universe();

  it("Simple sequence", () => {
    expect(uni.unpackLine("4o!")).to.equal("oooo");
  });

  it("Complex sequence", () => {
    expect(uni.unpackLine("4ob!")).to.equal("oooob");
  });

});
