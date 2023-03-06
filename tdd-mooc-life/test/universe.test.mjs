import { expect } from "chai";
import { Universe } from "../src/universe.mjs";

describe("Example test fixture", () => {
  let uni = new Universe();

  it("Simple line", () => {
    expect(uni.unpackLine("4o")).to.equal("####");
  });
});
