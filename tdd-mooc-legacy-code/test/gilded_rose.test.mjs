import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";
/* 
"Aged Brie"
"Backstage passes to a TAFKAL80ETC concert"
"Sulfuras, Hand of Ragnaros"
 */
describe("Gilded Rose", () => {
  it("should return foo (0, 0) as (-1, 0)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-1, "SellIn mismatch");
    expect(items[0].quality).to.equal(0, "Quality mismatch");
  });

  it("should return foo (1, 0) as (0, 0)", () => {
    const gildedRose = new Shop([new Item("foo", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(0, "SellIn mismatch");
    expect(items[0].quality).to.equal(0, "Quality mismatch");
  });

  it("should return foo (0, 1) as (-1, 0)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-1, "SellIn mismatch");
    expect(items[0].quality).to.equal(0, "Quality mismatch");
  });

  it("should return foo (-1, -1) as (-2, 3)", () => {
    const gildedRose = new Shop([new Item("foo", -1, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-2, "SellIn mismatch");
    expect(items[0].quality).to.equal(-1, "Quality mismatch");
  });

  it("should return Sulfuras (1, 1) as (-1, -1)", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1, "SellIn mismatch");
    expect(items[0].quality).to.equal(1, "Quality mismatch");
  });
});
