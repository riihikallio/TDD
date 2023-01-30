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
    for (let i=0; i<height; i++) {
      this.board[i] = Array(width);
      for (let j=0; j<width; j++) {
        this.board[i][j] = '.';
      }
    }
  }

  drop(block) {
    if (this.block === null) {
      this.block = block;
      this.block.y = 0;
      this.block.x = Math.floor(this.width / 2);
      this.board[this.block.y][this.block.x] = this.block.color;
    } else {
      throw("already falling")
  } 
}

  tick() {
    if (this.block !== null && this.block.y < this.height - 1 && this.board[this.block.y + 1][this.block.x] === '.') {
      this.board[this.block.y][this.block.x] = '.';
      this.block.y++;
      this.board[this.block.y][this.block.x] = this.block.color;
    } else {
      this.block = null;
    }
  }

  hasFalling() {
    return this.block ? true : false;
  }

  toString() {
    let str = '';
    for (let i=0; i<this.height; i++) {
      str = str.concat(...this.board[i], '\n');
    }
    return str;
  }
}
