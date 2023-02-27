import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_O extends ArikaShape {

    constructor() {
        super();
        this.size = 2;
        this.state = 0;
        this.arr = [['O','O'],
                    ['O','O']];
        this.offset = 0;
    }
}