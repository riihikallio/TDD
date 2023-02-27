import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_I extends ArikaShape {

    tmpl = [[['.', '.', '.', '.'],
             ['I', 'I', 'I', 'I'],
             ['.', '.', '.', '.'],
             ['.', '.', '.', '.']],

            [['.', '.', 'I', '.'],
             ['.', '.', 'I', '.'],
             ['.', '.', 'I', '.'],
             ['.', '.', 'I', '.']]];

    constructor(initialState = 0) {
        super();
        this.size = 4;
        this.state = initialState;
        this.arr = this.tmpl[this.state];
        this.offset = -1;
    }

    rotateRight() {
        return new Arika_I((1 - this.state));
    }

    rotateLeft() {
        return new Arika_I((1 - this.state));
    }

}