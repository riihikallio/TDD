export class Universe {
  arr;

  constructor(str) {
    if (!str) { return; } // simple tests
    this.arr = str.split("$");
    for (let row = 0; row < this.arr.length; row++) {
      this.arr[row] = this.unpackLine(this.arr[row]);
    }
  }

  unpackLine(packed) {
    let found = [];
    let count = 0;
    let result = "";
    let char = "#";
    while (packed.length > 0) {
      found = packed.match(/(\d*)(\w)/);
      if (!found) { break; }
      count = parseInt(found[1]) || 1;
      char = (found[2] === "o") ? "#" : " ";
      result += char.repeat(count);
      packed = packed.slice(found[0].length);
    }
    return result;
  }
}

