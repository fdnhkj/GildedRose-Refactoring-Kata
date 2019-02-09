import { incrementQuality, decrementSellIn, isItemExpired } from './common';

export default function agedBrieQualityModifier(item) {
  decrementSellIn(item);
  incrementQuality(item);
  if (isItemExpired(item)) {
    incrementQuality(item);
  }
  return item;
}
