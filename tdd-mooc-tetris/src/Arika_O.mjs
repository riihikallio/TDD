import { ArikaShape } from "./ArikaShape.mjs";

export class Arika_O extends ArikaShape {

    constructor() {
        super();
        this.size = 3;
        this.state = 0;
        this.arr = [['.','.','.'],
                    ['.','O','O'],
                    ['.','O','O']];
    }
}