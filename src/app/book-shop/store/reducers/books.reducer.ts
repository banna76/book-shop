import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { Author, Book } from "../../mock-data/models";
import { loadBookSuccess, loadBookFail } from '../actions/books.action';

export const intialBookState: Book[] = [];

export const bookReducer = createReducer(
    intialBookState,

  on(loadBookSuccess, (entries, product) => {
    const entriesClone: Book[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

)