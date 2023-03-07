import { expect } from "chai";
import { Universe } from "../src/universe.mjs";

describe("Unpack line", () => {
  let uni = new Universe();

  it("Simple sequence", () => {
    expect(uni.unpackLine("4o")[0]).to.equal("####");
  });

  it("Complex sequence", () => {
    expect(uni.unpackLine("4ob")[0]).to.equal("#### ");
  });

  it("More complex sequence", () => {
    expect(uni.unpackLine("4o2bo")[0]).to.equal("####  #");
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

  it("Extra data after !", () => {
    let uni = new Universe("2ob3o$o4bo!AAAAAA$ZZZZZZ");
    let result = ["## ###",
                  "#    #"];
    expect(uni.arr).to.eql(result);
  });

  it("Skip comments", () => {
    let data = `#C Jabba
#C Dabba
2ob3o$o4bo!`;
    let uni = new Universe(data);
    let result = ["## ###",
                  "#    #"];
    expect(uni.arr).to.eql(result);
  });

  it("Parse X and Y", () => {
    let data = `#C Jabba
#C Dabba
x=6,y=2
2ob3o$o4bo!`;
    let uni = new Universe(data);
    expect(uni.width).to.equal(6, "Width mismatch");
    expect(uni.height).to.equal(2, "Height mismatch");
  });

});
