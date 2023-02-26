import { Book } from '../../mock-data/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectLoadBooks = createSelector(
    createFeatureSelector('booksEntries'),
    (state: Book[]) => {
      return state;
    }
  );


