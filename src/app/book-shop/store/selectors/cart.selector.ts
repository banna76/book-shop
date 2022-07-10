import { Book } from '../../mock-data/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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