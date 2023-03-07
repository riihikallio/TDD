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
x = 16, y = 12
2ob3o$o4bo!`;
    let uni = new Universe(data);
    expect(uni.width).to.equal(16, "Width mismatch");
    expect(uni.height).to.equal(12, "Height mismatch");
  });

  it("Allow uneven lines", () => {
    let data = `#C Jabba
#C Dabba
x = 6, y = 2
2ob3o$o2bo!`;
    let uni = new Universe(data);
    let result = ["## ###",
                  "#  #  "];
    expect(uni.arr).to.eql(result);
  });

});

describe("ToString", () => {
  it("Simple case", () => {
    let uni = new Universe("2ob3o$o4bo!");
    let result = `## ###
#    #`;
    expect(uni.toString()).to.equal(result);
  });

})

describe("Encoding", () => {
  it("Simple case", () => {
    let key = "x = 2, y = 2\n2o$2o!";
    let uni = new Universe(key);
    uni.height = 2;
    uni.width = 2;
    expect(uni.encode()).to.equal(key);
  });

})

describe("Value", () => {
  it("Empty", () => {
    let uni = new Universe("x=3,y=3\n3b$3b$3b!");
    expect(uni.value(1, 1)).to.equal(0);
  });

  it("Three", () => {
    let uni = new Universe("x=3,y=2\nbob$obo!");
    expect(uni.value(1, 1)).to.equal(3, "(1, 1)");
    expect(uni.value(0, 0)).to.equal(2, "(0, 0)");
    expect(uni.value(0, 1)).to.equal(2, "(-1, -1)");
  });

})

describe("Expand", () => {
  it("Square", () => {
    let data = `x = 3, y = 2
3o$3o!`;
    let uni = new Universe(data);
    let result = "     \n ### \n ### \n     ";
    uni.expand();
    expect(uni.toString()).to.equal(result);
  });

})

describe("Tick", () => {
  it("Square", () => {
    let data = `x = 3, y = 2
3o$3o!`;
    let uni = new Universe(data);
    let result = "     \n ### \n ### \n     ";
    uni.tick();
    expect(uni.toString()).to.equal(result);
  });

})
