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

    // Read RLE data
    rle.replace(/\s/g, '');
    this.arr = Array(this.height);
    rows = rle.split("$");
    let done = false;
    let tmp;
    for (let row = 0; row < rows.length; row++) {
      [tmp, done] = this.unpackLine(rows[row]);
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
      char = (found[2] === "o") ? "#" : ".";
      result += char.repeat(count);
      packed = packed.slice(found[0].length);
      if (found[3]) {
        done = true;
        break;
      }
    }
    result = result.concat(".".repeat(this.width - result.length)); // Fill line ends
    return [result, done];
  }

  encode() {
    let result = "x = " + this.width + ", y = " + this.height + "\n";
    for (let i = 0; i < this.height; i++) {
      let cur = this.arr[i][0];
      let count = 1;
      for (let j = 0; j < this.width; j++) {
        if (cur !== this.arr[i][j]) {
          if (count > 1) { result += count; }
          result += (cur === "#") ? "o" : "b";
          cur = this.arr[i][j];
          count = 1;
        } else {
          count++;
        }
        if (j === this.width - 1) {
          count--;
          if (count > 1) { result += count; }
          result += (cur === "#") ? "o" : "b";
          if (i === this.height - 1) {
            result += "!";
          } else {
            result += "$";
          }
        }
      }
    }
    return result;
  }

  value(r, c) {
    let sum = 0;
    let tuples = [[1, 1],
    [1, 0],
    [1, -1],
    [0, 1],
    [0, 0],
    [0, -1],
    [-1, 1],
    [-1, 0],
    [-1, -1]];
    for (let t of tuples) {
      let r0 = r + t[0];
      let c0 = c + t[1];
      if (r0 < 0 || c0 < 0 || r0 > this.height - 1 || c0 > this.width - 1) { continue; }
      sum += (this.arr[r0][c0] === "#") ? 1 : 0;
    }
    return sum;
  }

  expand() {
    // Expand left and right edges
    for (let i = 0; i < this.height; i++) {
      this.arr[i] = "." + this.arr[i] + ".";
    }
    this.width += 2;
    this.height += 2;
    // Add an empty row at top and bottom
    this.arr.unshift(".".repeat(this.width));
    this.arr.push(".".repeat(this.width));
  }

  tick(rounds = 1) {
    for (let r = 0; r < rounds; r++) {
      let tmp = "";
      let tmps = [];
      this.expand();  // The universe expands on every tick
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          let val = this.value(i, j);
          if (val === 3) {
            tmp += "#";
          } else if (val === 4) {
            tmp += this.arr[i][j];
          } else {
            tmp += ".";
          }
        }
        tmps.push(tmp);
        tmp = "";
      }
      this.arr = tmps;
    }
  }

  toString() {
    return this.arr.join("\n");
  }

}