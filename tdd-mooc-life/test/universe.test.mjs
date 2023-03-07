import { expect } from "chai";
import { Universe } from "../src/universe.mjs";

describe("Unpack line", () => {
  let uni = new Universe();

  it("Simple sequence", () => {
    expect(uni.unpackLine("4o")).to.equal("####");
  });

  it("Complex sequence", () => {
    expect(uni.unpackLine("4ob")).to.equal("#### ");
  });

  it("More complex sequence", () => {
    expect(uni.unpackLine("4o2bo")).to.equal("####  #");
  });

});
