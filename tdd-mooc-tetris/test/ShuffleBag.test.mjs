import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

const average = (values) => {
    const mean = (values.reduce((sum, current) => sum + current)) / values.length;
    return mean;
};

const variance = (values) => {
    const avg = average(values);
    const squareDiffs = values.map((value) => {
        const diff = value - avg;
        return diff * diff;
    });
    const variance = average(squareDiffs);
    return variance;
};

describe("ShuffleBag functionality", () => {

    it("Distribution with small sample", () => {
        let bag = new ShuffleBag(7);
        let tab = new Map();
        for (let i = 0; i < 7; i++) {
            let objName = bag.next().constructor.name;
            tab.set(objName, (tab.get(objName) ?? 0) + 1);
        }

        const values = Array.from(tab.values());
        const x = variance(values) / average(values);
        expect(x).to.be.within(-0.001, 0.001);
    });

    it("Distribution with large sample from smallish population", () => {
        let bag = new ShuffleBag(100);
        let tab = new Map();
        for (let i = 0; i < 100000; i++) {
            let objName = bag.next().constructor.name;
            tab.set(objName, (tab.get(objName) ?? 0) + 1);
        }

        const values = Array.from(tab.values());
        const x = variance(values) / average(values);
        expect(x).to.be.within(-0.001, 0.001);
    });
});