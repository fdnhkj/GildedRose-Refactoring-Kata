const maxQuality = 50;
const minQuality = 0;

export function isItemExpired(item) {
  return item.sellIn < 0;
}

export function incrementQuality(item) {
  if (item.quality < maxQuality) {
    item.quality++;
  }
}

export function decrementQuality(item) {
  if (item.quality > minQuality) {
    item.quality--;
  }
}

export function decrementSellIn(item) {
  item.sellIn--;
}
