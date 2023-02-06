export class Board {
  width;
  height;
  arr;
  block;
  x;
  y;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.block = null;

    this.arr = Array(height);
    for (let i = 0; i < height; i++) {
      this.arr[i] = Array(width);
      for (let j = 0; j < width; j++) {
        this.arr[i][j] = '.';
      }
    }
  }

  init(str) {
    let tmp1 = str.split(/\s+/);
    for (let i = 0; i < height; i++) {
      let tmp2 = str.split();
      for (let j = 0; j < width; j++) {
        this.arr[i][j] = tmp2[j];
      }
    }
  }

  drop(block) {
    if (this.block === null) {
      this.block = block;
      this.y = 0;
      this.x = Math.ceil(this.width / 2) - Math.floor(block.size / 2) - 1;
      if (block.test(this, this.x, this.y)) {
        block.draw(this, this.x, this.y);
      } else {
        throw Error("end of game");
      }
    } else {
      throw Error("already falling");
    }
  }

  tick() {
    if (this.block !== null) {
      this.block.draw(this, this.x, this.y, '.');
      if (this.block.test(this, this.x, this.y + 1)) {
        this.y++;
        this.block.draw(this, this.x, this.y);
      } else {
        this.block.draw(this, this.x, this.y);
        this.block = null;
      }
    }
  }

  move(direction) { // Directions: -1 = Left, +1 = Right
    this.block.draw(this, this.x, this.y, '.');
    if (this.block.test(this, this.x + direction, this.y)) {
      this.x += direction;
      this.block.draw(this, this.x, this.y);
    } else {
      this.block.draw(this, this.x, this.y);
    }
  }

  fall() {
    while (this.block) {
      this.tick();
    }
  }

  hasFalling() {
    return this.block ? true : false;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.height; i++) {
      str = str.concat(...this.arr[i], '\n');
    }
    return str;
  }
}
