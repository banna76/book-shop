import { Book } from '../../mock-data/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductGroup {
  product: Book;
  count: number;
}

export const selectCountProducts = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Book[]) => {
      return state.length;
    }
  );

export const selectTotalPrice = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Book[]) => {
        var totalPrice = 0;
        state.forEach(p => totalPrice += p.price);
        return totalPrice;
    }
)

export const selectGroupedCartEntries = createSelector(
  createFeatureSelector('cartEntries'),
  (state: Book[]) => {
    var map: Map<number, ProductGroup> = new Map;

    state.forEach(p => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id, { product: p, count: 1 });
      }
    })

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
)
