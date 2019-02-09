import defaultQualityModifier from './default';
import agedBrieQualityModifier from './aged-brie';
import sulfurasQualityModifier from './sulfuras';
import backstagePassQualityModifier from './backstage-pass';

export default function qualityItemModifier(item) {
  switch (item.name) {
    case 'Aged Brie':
      return agedBrieQualityModifier(item);
    case 'Sulfuras, Hand of Ragnaros':
      return sulfurasQualityModifier(item);
    case 'Backstage passes to a TAFKAL80ETC concert':
      return backstagePassQualityModifier(item);
    default:
      return defaultQualityModifier(item);
  }
  return item;
}
