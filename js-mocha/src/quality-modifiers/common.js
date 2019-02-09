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

export function decrementQuality(item, decrement = 1) {
  item.quality = Math.max(item.quality - decrement, minQuality);
}

export function decrementSellIn(item) {
  item.sellIn--;
}
