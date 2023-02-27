import { Arika_I } from "../src/Arika_I.mjs";
import { Arika_J } from "../src/Arika_J.mjs";
import { Arika_L } from "../src/Arika_L.mjs";
import { Arika_O } from "../src/Arika_O.mjs";
import { Arika_S } from "../src/Arika_S.mjs";
import { Arika_T } from "../src/Arika_T.mjs";
import { Arika_Z } from "../src/Arika_Z.mjs";

export class ShuffleBag {
    array;
    pointer;
    size;

    constructor(size = 21) {
        let bunch = Math.floor(size / 7);
        if (bunch === 0) { bunch = 1; }
        this.size = bunch * 7;
        this.pointer = 0;
        this.array = Array(size);
        this.array.fill(new Arika_I(), 0 * bunch, 1 * bunch);
        this.array.fill(new Arika_J(), 1 * bunch, 2 * bunch);
        this.array.fill(new Arika_L(), 2 * bunch, 3 * bunch);
        this.array.fill(new Arika_O(), 3 * bunch, 4 * bunch);
        this.array.fill(new Arika_S(), 4 * bunch, 5 * bunch);
        this.array.fill(new Arika_T(), 5 * bunch, 6 * bunch);
        this.array.fill(new Arika_Z(), 6 * bunch, 7 * bunch);
        this.array.sort(() => Math.random() - 0.5);
    }

    next() {
        if (this.pointer === this.size) {
            this.pointer = 0;
            this.array.sort(() => Math.random() - 0.5);
        }
        return this.array[this.pointer++];
    }
}