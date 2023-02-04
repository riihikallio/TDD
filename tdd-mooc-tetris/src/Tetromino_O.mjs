import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino_O extends RotatingShape {

    constructor() {
        super(
            `.OO
             .OO
             ...`       
       );
    }

    rotateRight() {
        return this;
    }

    rotateLeft() {
        return this;
    }
}
