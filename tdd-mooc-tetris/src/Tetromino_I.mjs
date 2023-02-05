import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino_I extends RotatingShape {

    constructor(vertical) {
        if (vertical) {
            super(
                `..I..
                 ..I..
                 ..I..
                 ..I..
                 .....`
               );
        } else {
            super(
                `.....
                 .....
                 IIII.
                 .....
                 .....`
            );
        }
    }

    rotateRight() {
        if (this.str5[14] === 'I') {
            return new Tetromino_I(true);
        } else {
            return new Tetromino_I();
        }
    }

    rotateLeft() {
        return this.rotateRight();
    }
}
