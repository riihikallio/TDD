export class Universe {

  unpackLine(packed) {
    let found = Array(4);
    let count = 0;
    let result = [];
    while (!found[3]) {
      found = packed.match(/(\d*)(\w)(!?)/);
      count = parseInt(found[1]) || 1;
      result += found[2].repeat(count);
      packed = packed.slice(found[0].length);
    }
    return result;
  }
}

