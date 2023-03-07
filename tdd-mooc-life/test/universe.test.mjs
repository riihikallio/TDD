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

describe("Parsing", () => {

  it("Simple case", () => {
    let uni = new Universe("2o$oo!");
    let result = ["##",
                  "##"];
    expect(uni.arr).to.eql(result);
  });

  it("Complex case", () => {
    let uni = new Universe("2ob3o$o4bo!");
    let result = ["## ###",
                  "#    #"];
    expect(uni.arr).to.eql(result);
  });

});
