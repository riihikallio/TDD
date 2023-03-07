export class Universe {
  arr;
  width;
  height;

  constructor(str) {
    if (!str) { return; } // for simple tests

    // Read header
    let rle = "";
    let rows = str.split("\n");
    for (let row of rows) {
      if (row.match(/^#/)) { continue; }  // Skip comments
      let match = row.match(/\s*[xX]\s*=\s*(\d+),\s*[yY]\s*=\s*(\d+)/);
      if (match) {
        this.width = parseInt(match[1]);
        this.height = parseInt(match[2]);
        continue;
      }
      rle += row;
    }
    rle.replace(/\w/, '');

    // Read RLE data
    this.arr = Array(this.height);
    rows = rle.split("$");
    let done = false;
    let tmp;
    for (let row = 0; row < rows.length; row++) {
      [ tmp, done ] = this.unpackLine(rows[row]);
      this.arr[row] = tmp;
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
      count = parseInt(found[1]) || 1;
      char = (found[2] === "o") ? "#" : " ";
      result += char.repeat(count);
      packed = packed.slice(found[0].length);
      if (found[3]) { 
        done = true;
        break; }
    }
    result = result.concat(" ".repeat(this.width - result.length)); // Fill line ends
    return [ result, done ];
  }

  toString() {
    return this.arr.join("\n");
  }
}

