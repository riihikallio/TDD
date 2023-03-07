export class Universe {
  arr;

  constructor(str) {
    if (!str) { return; } // simple tests
    this.arr = [];
    let rows = str.split("$");
    let done = false;
    let tmp;
    for (let row = 0; row < rows.length; row++) {
      [ tmp, done ] = this.unpackLine(rows[row]);
      this.arr.push(tmp);
      if (done) { break; }
    }
  }

  unpackLine(packed) {
    let found = [];
    let count = 0;
    let result = "";
    let char = "#";
    let done = false;
    while (packed.length > 0) {
      found = packed.match(/(\d*)(\w)(!?)/);
      console.log("Found: ", found);
      count = parseInt(found[1]) || 1;
      char = (found[2] === "o") ? "#" : " ";
      result += char.repeat(count);
      packed = packed.slice(found[0].length);
      if (found[3]) { 
        console.log("Breaking: ", found[3]);
        done = true;
        break; }
    }
    return [ result, done ];
  }
}

