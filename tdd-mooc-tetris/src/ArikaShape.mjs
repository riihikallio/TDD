export class ArikaShape {
    size;
    state;
    arr;

    rotateRight() {
        return this;
    }

    rotateLeft() {
        return this;
    }

    test(board, x, y) {
        for (let i = this.size - 1; i >= 0; i--) {   // Start from the bottom to fail fast
            for (let j = this.size - 1; j >= 0; j--) {
                if (this.arr[i][j] === '.') {
                    continue;
                }
                let c = y + i;
                let r = x + j;
                if (r >= board.height || c < 0 || c >= board.width) {
                    return false;
                } else if (board.arr[r][c] !== '.') {
                    return false;
                }
            }
        }
        return true;
    }

    draw(board, char) {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.arr[r][c] === '.') {
                    continue;
                }
                board.arr[board.y + c][board.x + r] = char ?? this.arr[r][c];
            }
        }
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.size; i++) {
            s = s.concat(...this.arr[i], '\n');
        }
        return s;
    }
}