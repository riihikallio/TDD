export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function updateBrie(item) {
  item.sellIn--;
  if (item.quality < 50) { item.quality++; }
}

function updatePass(item) {
  item.sellIn--;
  // No value after concert
  if (item.sellIn < 0) {
    item.quality = 0;
  } else {
    item.quality++;
    // Increase value faster closer to concert
    if (item.sellIn <= 10) {
      item.quality++;
      if (item.sellIn <= 5) {
        item.quality++;
      }
    }
    if (item.value > 50) { item.value = 50; }
  }
}

function updateConjured(item) {
  item.sellIn--;
  item.quality -= 2;
  // Decrease overdue items' value
  if (item.sellIn < 0) {
    item.quality -= 2;
  }
  if (item.value < 0) { item.value = 0; }
}

function updateGeneric(item) {
  item.sellIn--;
  item.quality--;
  // Decrease overdue items' value
  if (item.sellIn < 0) {
    item.quality--;
  }
  if (item.quality < 0) { item.quality = 0; }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case "Aged Brie":
          updateBrie(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          updatePass(this.items[i]);
          break;
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Conjured":
          updateConjured(this.items[i]);
          break;
        default:
          updateGeneric(this.items[i]);
      }
    }
    return this.items;
  }
}