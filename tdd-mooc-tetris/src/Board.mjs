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
    let rows = str.split(/\s+/);
    let r = 0;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length !== this.width) { continue; }
      this.arr[r] = rows[i].split('');
      r++;
    }
  }

  drop(block) {
    if (this.block === null) {
      this.block = block;
      this.y = 0;
      this.x = Math.ceil(this.width / 2) - Math.floor(block.size / 2) - 1;
      if (block.test(this, this.x, this.y)) {
        block.draw(this);
      } else {
        throw Error("end of game");
      }
    } else {
      throw Error("already falling");
    }
  }

  tick() {
    if (this.block !== null) {
      this.block.draw(this, '.');
      if (this.block.test(this, this.x, this.y + 1)) {
        this.y++;
        this.block.draw(this);
      } else {
        this.block.draw(this);
        this.block = null;
      }
    }
  }

  move(direction) { // Directions: -1 = Left, +1 = Right
    this.block.draw(this, '.');
    if (this.block.test(this, this.x + direction, this.y)) {
      this.x += direction;
      this.block.draw(this);
    } else {
      this.block.draw(this);
    }
  }

  fall() {
    while (this.block) {
      this.tick();
    }
  }

  rotate(direction) {   // 0 : right, 1 : left
    this.block.draw(this, '.');
    let rotated = direction ? this.block.rotateLeft() : this.block.rotateRight();
    if (rotated.test(this, this.x, this.y)) {
      this.block = rotated;
    } else if (rotated.test(this, this.x + 1, this.y)) {  // Kick right first
      this.block = rotated;
      this.x += 1;
    } else if (rotated.test(this, this.x - 1, this.y)) {  // Kick left
      this.block = rotated;
      this.x -= 1;
    }
    this.block.draw(this);
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
