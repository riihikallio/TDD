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
        let s = this.fullStr;
        for (let i = s.length - 1; i >= 0; i--) {   // Start from the end to fail fast
            if (s[i] === '.') {
                continue;
            }
            let r = y + Math.floor(i / this.size);
            let c = x + i % this.size;
            if (r >= board.height || c < 0 || c >= board.width) {
                return false;
            } else if (board.arr[r][c] !== '.') {
                return false;
            }
        }
        return true;
    }

    draw(board, char) {
        let s = this.fullStr;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === '.') {
                continue;
            }
            let r = board.y + Math.floor(i / this.size);
            let c = board.x + i % this.size;
            board.arr[r][c] = char ?? s[i];
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