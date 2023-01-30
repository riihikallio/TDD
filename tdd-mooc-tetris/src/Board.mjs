export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.board = Array(height);
    for (let i=0; i<height; i++) {
      this.board[i] = Array(width);
      for (let j=0; j<width; j++) {
        this.board[i][j] = '.';
      }
    }
  }

  toString() {
    let str = '';
    for (let i=0; i<this.height; i++) {
      str = str.concat(...this.board[i], '\n');
    }
    return str;
  }
}
