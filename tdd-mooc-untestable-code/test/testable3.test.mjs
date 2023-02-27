import { expect } from "chai";
import { parsePeopleCsv, parsePeopleData } from "../src/testable3.mjs";

let data = `Loid,Forger,,Male
            Anya,Forger,6,Female
            Yor,Forger,27,Female`;

describe("Testable 3: CSV file parsing", () => {
  let result = parsePeopleData(data);

  it("number of rows", async () => {
    expect(result.length).to.equal(3);
  });

  it("first row first name", async () => {
    expect(result[0].firstName).to.equal("Loid");
  });

  it("second row last name", async () => {
    expect(result[1].lastName).to.equal("Forger");
  });

  it("last row age", async () => {
    expect(result[2].age).to.equal(27);
  });

  it("last row gender", async () => {
    expect(result[2].gender).to.equal("f");
  });
});
