import { incrementQuality, decrementSellIn, isItemExpired } from './common';

export default function backstagePassQualityModifier(item) {
  incrementQuality(item);
  if (item.sellIn <= 10) {
    incrementQuality(item);
  }
  if (item.sellIn <= 5) {
    incrementQuality(item);
  }
  decrementSellIn(item);
  if (isItemExpired(item)) {
    item.quality = 0;
  }
  return item;
}
