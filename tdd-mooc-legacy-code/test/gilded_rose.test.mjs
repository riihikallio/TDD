import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";
/* 
"Aged Brie"
"Backstage passes to a TAFKAL80ETC concert"
"Sulfuras, Hand of Ragnaros"
 */
describe("Gilded Rose", () => {
  it("should return (foo, 0, 0) as (-1, 0)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-1, "SellIn mismatch");
    expect(items[0].quality).to.equal(0, "Quality mismatch");
  });

  it("should return (foo, 0, 5) as (-1, 3)", () => {
    const gildedRose = new Shop([new Item("foo", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-1, "SellIn mismatch");
    expect(items[0].quality).to.equal(3, "Quality mismatch");
  });

  it("should return (foo, -5, -5) as (-6, 3)", () => {
    const gildedRose = new Shop([new Item("foo", -5, -5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo", "Name mismatch");
    expect(items[0].sellIn).to.equal(-6, "SellIn mismatch");
    expect(items[0].quality).to.equal(-5, "Quality mismatch");
  });
});
