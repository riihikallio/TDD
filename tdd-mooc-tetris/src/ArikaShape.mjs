export class ArikaShape {
    size;
    state;
    arr;
    offset;

    rotateRight() {
        return this;
    }

    rotateLeft() {
        return this;
    }

    check(board, x, y) {
        for (let i = this.size - 1; i >= 0; i--) {   // Start from the bottom to fail fast
            for (let j = this.size - 1; j >= 0; j--) {
                if (this.arr[i][j] === '.') { continue; }
                let r = y + i;
                let c = x + j;
                if (r < 0) { continue; }
                if (r >= board.height || c < 0 || c >= board.width) {
                    console.log(`########### Out of bounds: r(${r}) c(${c}) i(${i}) j(${j}) y(${y}) x(${x})`);
                    return false;
                } else if (board.arr[r][c] !== '.') {
                    console.log("##### Collision")
                    return false;
                }
            }
        }
        return true;
    }

    draw(board, char) {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                if (this.arr[r][c] === '.') { continue; }
                board.arr[board.y + r][board.x + c] = char ?? this.arr[r][c];
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