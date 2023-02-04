import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino_I extends RotatingShape {

    constructor() {
        super(
        `.....
        .....
        IIII.
        .....
        .....`
       );
    }

    rotateRight() {
        if (this.str5[14] === 'I') {
            let vert = new Tetromino_I();
            vert.str3 = ".I...I..";
            vert.str5 = "..I...............";
            return vert;
        } else {
            return new Tetromino_I();
        }
    }

    rotateLeft() {
        return this.rotateRight();
    }
}
