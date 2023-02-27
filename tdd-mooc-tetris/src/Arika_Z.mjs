import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_Z extends ArikaShape {

    tmpl = [[['.', '.', '.'],
             ['Z', 'Z', '.'],
             ['.', 'Z', 'Z']],

            [['.', '.', 'Z'],
             ['.', 'Z', 'Z'],
             ['.', 'Z', '.']]];

    constructor(initialState = 0) {
        super();
        this.size = 3;
        this.state = initialState;
        this.arr = this.tmpl[this.state];
        this.offset = -1;
    }

    rotateRight() {
        return new Arika_Z((1 - this.state));
    }

    rotateLeft() {
        return new Arika_Z((1 - this.state));
    }

}