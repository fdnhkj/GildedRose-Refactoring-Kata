import { expect } from 'chai';
import { Item, Shop } from '../src/gilded_rose';

describe('Gilded Rose shop', () => {
  it('should lower both quality and sell in at the end of each day for every item', () => {
    const gildedRose = new Shop([
      new Item('test', 2, 2),
      new Item('test', 1, 3)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(1);
    expect(items[1].sellIn).to.equal(0);
    expect(items[1].quality).to.equal(2);
  });

  it('should degrade quality twice as fast once sell by date has passed', () => {
    const gildedRose = new Shop([new Item('test', 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(2);
  });

  it('should not degrade quality of an item to a negative value', () => {
    const gildedRose = new Shop([new Item('test', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it('should increase quality of items like Aged Brie and Backstage passes the older they get', () => {
    const gildedRose = new Shop([
      new Item('Aged Brie', 2, 1),
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 1)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(2);
    expect(items[1].sellIn).to.equal(11);
    expect(items[1].quality).to.equal(2);
  });

  it('should increase by 2 quality of Aged Brie when sell by date expired', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(3);
  });

  it('should never increase quality of an item to more than 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(50);
  });

  it('should never lower quality and sell in for "Sulfuras" item', () => {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', 1, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(1);
    expect(items[0].quality).to.equal(50);
  });

  it('should increase quality by 2 of "Backstage passes" items when sellIn is between 6 and 10 days', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(22);
  });

  it('should increase quality by 3 of "Backstage passes" items when sellIn is between 1 and 5 days', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 1, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(23);
  });

  it('should drop quality to 0 for "Backstage passes" items when the concert is over', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });

  it('should drop quality of Conjured items twice faster than normal items', () => {
    const gildedRose = new Shop([new Item('Conjured', 1, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(8);

    items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(4);
  });
});
