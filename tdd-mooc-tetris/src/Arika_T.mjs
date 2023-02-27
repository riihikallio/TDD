import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_T extends ArikaShape {

    tmpl = [[['.', '.', '.'],
             ['T', 'T', 'T'],
             ['.', 'T', '.']],

            [['.', 'T', '.'],
             ['T', 'T', '.'],
             ['.', 'T', '.']],

            [['.', '.', '.'],
             ['.', 'T', '.'],
             ['T', 'T', 'T']],

            [['.', 'T', '.'],
             ['.', 'T', 'T'],
             ['.', 'T', '.']]];

    constructor(initialState = 0) {
        super();
        this.size = 3;
        this.state = initialState;
        this.arr = this.tmpl[this.state];
        this.offset = -1;
    }

    rotateRight() {
        return new Arika_T((this.state + 1) % 4);
    }

    rotateLeft() {
        return new Arika_T((this.state + 3) % 4);
    }

}