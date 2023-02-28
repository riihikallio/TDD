export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].quality > 0 && this.items[i].name != "Sulfuras, Hand of Ragnaros") {
          this.items[i].quality--;
        }
      } else if (this.items[i].quality < 50) {
        this.items[i].quality++;
        if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
          if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
            this.items[i].quality++;
          }
          if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        }
      }
      // Decrease selling time for other that Sulfuras
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn--;
      }
      // For overdue items
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
            this.items[i].quality = 0;
          } else if (this.items[i].quality > 0 && this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality--;
          }
        } else if (this.items[i].quality < 50) {
          this.items[i].quality++;
        }
      }
    }
    return this.items;
  }
}
