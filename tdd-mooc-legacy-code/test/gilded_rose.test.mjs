import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose2.mjs";

const prods = ["Something else",
               "Aged Brie",
               "Backstage passes to a TAFKAL80ETC concert",
               "Sulfuras, Hand of Ragnaros"
              ];
const sellIns = [-1, 0, 1, 5, 6, 10, 11];
const quals = [0, 1, 47, 48, 49, 50];

const expected = [[-2,0],[-2,0],[-2,45],[-2,46],[-2,47],[-2,48],[-1,0],[-1,0],[-1,45],[-1,46],[-1,47],
[-1,48],[0,0],[0,0],[0,46],[0,47],[0,48],[0,49],[4,0],[4,0],[4,46],[4,47],[4,48],[4,49],[5,0],[5,0],
[5,46],[5,47],[5,48],[5,49],[9,0],[9,0],[9,46],[9,47],[9,48],[9,49],[10,0],[10,0],[10,46],[10,47],
[10,48],[10,49],[-2,2],[-2,3],[-2,49],[-2,50],[-2,50],[-2,50],[-1,2],[-1,3],[-1,49],[-1,50],[-1,50],
[-1,50],[0,1],[0,2],[0,48],[0,49],[0,50],[0,50],[4,1],[4,2],[4,48],[4,49],[4,50],[4,50],[5,1],[5,2],
[5,48],[5,49],[5,50],[5,50],[9,1],[9,2],[9,48],[9,49],[9,50],[9,50],[10,1],[10,2],[10,48],[10,49],
[10,50],[10,50],[-2,0],[-2,0],[-2,0],[-2,0],[-2,0],[-2,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],[-1,0],
[0,3],[0,4],[0,50],[0,50],[0,50],[0,50],[4,3],[4,4],[4,50],[4,50],[4,50],[4,50],[5,2],[5,3],[5,49],
[5,50],[5,50],[5,50],[9,2],[9,3],[9,49],[9,50],[9,50],[9,50],[10,1],[10,2],[10,48],[10,49],[10,50],
[10,50],[-1,0],[-1,1],[-1,47],[-1,48],[-1,49],[-1,50],[0,0],[0,1],[0,47],[0,48],[0,49],[0,50],[1,0],
[1,1],[1,47],[1,48],[1,49],[1,50],[5,0],[5,1],[5,47],[5,48],[5,49],[5,50],[6,0],[6,1],[6,47],[6,48],
[6,49],[6,50],[10,0],[10,1],[10,47],[10,48],[10,49],[10,50],[11,0],[11,1],[11,47],[11,48],[11,49],[11,50]]

describe("Gilded Rose", () => {
  it("item constructor", () => {
    const item = new Item("foo", 1, 2);
    expect(item).to.have.property("name");
    expect(item.name).to.equal("foo");
    expect(item).to.have.property("sellIn");
    expect(item.sellIn).to.equal(1);
    expect(item).to.have.property("quality");
    expect(item.quality).to.equal(2);
  })

  it("shop constructor", () => {
    const shop = new Shop();
    expect(shop).to.have.property("items");
    expect(shop.items).to.be.an.instanceof(Array);
    expect(shop.items.length).to.equal(0);
  })

  it("shop constructor with one item", () => {
    const shop = new Shop([new Item("foo", 1, 1)]);
    expect(shop.items.length).to.equal(1);
  })

  let c = 0;
  it("run updateQuality", () => {
    for (let prod of prods) {
      for (let sellIn of sellIns) {
        for (let quality of quals) {
          const gildedRose = new Shop([new Item(prod, sellIn, quality)]);
          const results = gildedRose.updateQuality();
          const location = `(${sellIn},${quality}) should produce (${expected[c][0]},${expected[c][1]}) for "${prod}"`;
          expect(results[0].name).to.equal(prod, "Name mismatch");
          expect(results[0].sellIn).to.equal(expected[c][0], location);
          expect(results[0].quality).to.equal(expected[c][1], location);
          c++;
        }
      }
    }
  });
});