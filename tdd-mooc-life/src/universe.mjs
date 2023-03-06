export class Universe {

  unpackLine(packed) {
    let found = packed.match(/(\d*)(\w)(!?)/);
    let result = "#".repeat(parseInt(found[1]));
    return result;
  }
}

