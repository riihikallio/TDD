export class Universe {

  unpackLine(packed) {
    let found = [];
    let count = 0;
    let result = "";
    let char = "#";
    while (packed.length > 0) {
      found = packed.match(/(\d*)(\w)/);
      count = parseInt(found[1]) || 1;
      char = (found[2] === "o") ? "#" : " ";
      result += char.repeat(count);
      packed = packed.slice(found[0].length);
    }
    return result;
  }
}

