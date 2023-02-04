import { RotatingShape } from "../src/RotatingShape.mjs";

class Tetromino_O extends RotatingShape {
    rotateRight() {
        return this;
    }

    rotateLeft() {
        return this;
    }
}

class Tetromino_I extends RotatingShape {

    rotateRight() {
        if (this.str5[14] === 'I') {
            return new Tetromino_I(
                `..I..
                ..I..
                ..I..
                ..I..
                .....`
                );
        } else {
            return Tetromino.I_SHAPE;
        }
    }

    rotateLeft() {
        return this.rotateRight();
    }
}

export class Tetromino {
    static T_SHAPE = new RotatingShape(
    `.T.
    TTT
    ...`
    );

    static I_SHAPE = new Tetromino_I(
    `.....
    .....
    IIII.
    .....
    .....`
    );

    static O_SHAPE = new Tetromino_O(
    `.OO
    .OO
    ...`
    );
}