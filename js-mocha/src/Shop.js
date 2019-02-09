import qualityItemModifier from './quality-modifiers';

export default class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateInventory() {
    return this.items.map(qualityItemModifier);
  }
}
