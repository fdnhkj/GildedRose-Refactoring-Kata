import { decrementSellIn, decrementQuality, isItemExpired } from './common';

export default function defaultQualityModifier(item) {
  decrementSellIn(item);
  decrementQuality(item);
  if (isItemExpired(item)) {
    decrementQuality(item);
  }
  return item;
}
