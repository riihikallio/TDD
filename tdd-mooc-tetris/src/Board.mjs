export class Board {
  width;
  height;
  board;
  block;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.block = null;

    this.board = Array(height);
    for (let i = 0; i < height; i++) {
      this.board[i] = Array(width);
      for (let j = 0; j < width; j++) {
        this.board[i][j] = '.';
      }
    }
  }

  drop(block) {
    if (this.block === null) {
      this.block = block;
      this.block.y = 0;
      this.block.x = Math.floor(this.width / 2);
      if (block.test(this.board, this.block.x, this.block.y)) {
        block.draw(this.board, this.block.x, this.block.y);
      } else {
        throw Error("end of game");
      }
    } else {
      throw Error("already falling");
    }
  }

  tick() {
    if (this.block !== null && this.block.y < this.height - 1 && this.block.test(this.board, this.block.x, this.block.y + 1)) {
      this.block.erase(this.board, this.block.x, this.block.y);
      this.block.y++;
      this.block.draw(this.board, this.block.x, this.block.y);
    } else {
      this.block = null;
    }
  }

  hasFalling() {
    return this.block ? true : false;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.height; i++) {
      str = str.concat(...this.board[i], '\n');
    }
    return str;
  }
}
