import { decrementSellIn, decrementQuality, isItemExpired } from './common';

export default function conjuredQualityModifier(item) {
  decrementSellIn(item);
  decrementQuality(item, 2);
  if (isItemExpired(item)) {
    decrementQuality(item, 2);
  }
  return item;
}
