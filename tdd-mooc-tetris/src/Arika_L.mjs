import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_L extends ArikaShape {

    tmpl = [[['.', '.', '.'],
             ['L', 'L', 'L'],
             ['L', '.', '.']],

            [['.', 'L', '.'],
             ['.', 'L', '.'],
             ['.', 'L', 'L']],

            [['.', '.', '.'],
             ['.', '.', 'L'],
             ['L', 'L', 'L']],

            [['L', 'L', '.'],
             ['.', 'L', '.'],
             ['.', 'L', '.']]];

    constructor(initialState = 0) {
        super();
        this.size = 3;
        this.state = initialState;
        this.arr = this.tmpl[this.state];
        this.offset = -1;
    }

    rotateRight() {
        return new Arika_L((this.state + 1) % 4);
    }

    rotateLeft() {
        return new Arika_L((this.state + 3) % 4);
    }

}