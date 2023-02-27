export class RotatingShape {
    size;
    center;
    str3;
    str5;
    fullStr;

    constructor(s) {
        s = s.replace(/\s+/g, '');
        this.size = Math.round(Math.sqrt(s.length));
        if (this.size === 1) {
            this.center = s;
        } else if (this.size === 3) {
            this.center = s[4];
            this.str3 = s.slice(0, 3) + s[5] + s[8] + s[7] + s[6] + s[3];
        } else if (this.size === 5) {
            this.center = s[12];
            this.str3 = s.slice(6, 9) + s[13] + s[18] + s[17] + s[16] + s[11];
            this.str5 = s.slice(0, 5) + s[9] + s[14] + s[19] + s[24] + s[23] + s[22] + s[21] + s[20] + s[15] + s[10] + s[5];
        } else {
            throw Error("Undefined size");
        }
        this.fullStr = s;
    }

    rotateRight() {
        if (this.size === 1) {
            return this;
        } else if (this.size === 3) {
            const s = this.str3.slice(-2) + this.str3.slice(0, -2);
            return new RotatingShape(this.stringify3(s));
        } else if (this.size === 5) {
            const s3 = this.str3.slice(-2) + this.str3.slice(0, -2);
            const s5 = this.str5.slice(-4) + this.str5.slice(0, -4);
            return new RotatingShape(this.stringify5(s3, s5));
        }
    }

    rotateLeft() {
        if (this.size === 1) {
            return this;
        } else if (this.size === 3) {
            const s = this.str3.slice(2) + this.str3.slice(0, 2);
            return new RotatingShape(this.stringify3(s));
        } else if (this.size === 5) {
            const s3 = this.str3.slice(2) + this.str3.slice(0, 2);
            const s5 = this.str5.slice(4) + this.str5.slice(0, 4);
            return new RotatingShape(this.stringify5(s3, s5));
        }
    }

    check(board, x, y) {
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

    stringify3(s) {
        return s[0] + s[1] + s[2] + '\n' + s[7] + this.center + s[3] + '\n' + s[6] + s[5] + s[4] + '\n';
    }

    stringify5(s, t) {
        const s3 = this.stringify3(s);
        const s5 = t.slice(0, 5) + '\n' +
            t[15] + s3.slice(0, 3) + t[5] + '\n' +
            t[14] + s3.slice(4, 7) + t[6] + '\n' +
            t[13] + s3.slice(8, 11) + t[7] + '\n' +
            t[12] + t[11] + t[10] + t[9] + t[8] + '\n';
        return s5;
    }

    toString() {
        if (this.size === 1) {
            return this.fullStr + '\n';
        } else if (this.size === 3) {
            return this.fullStr.slice(0, 3) + '\n' +
                this.fullStr.slice(3, 6) + '\n' +
                this.fullStr.slice(6, 9) + '\n';
        } else if (this.size === 5) {
            return this.fullStr.slice(0, 5) + '\n' +
                this.fullStr.slice(5, 10) + '\n' +
                this.fullStr.slice(10, 15) + '\n' +
                this.fullStr.slice(15, 20) + '\n' +
                this.fullStr.slice(20, 25) + '\n';
        }
    }
}
