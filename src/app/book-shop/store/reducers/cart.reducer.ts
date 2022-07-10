import { createReducer, on } from '@ngrx/store';
import { Author, Book } from "../../mock-data/models";
import { clearCart,addProduct, removeProduct } from '../actions/cart.action';

export const intialCartEntries: Book[] = [];

export const cartReducer = createReducer(
  intialCartEntries,

  on(clearCart, _ => [] ),

  on(addProduct, (entries, product) => {
    const entriesClone: Book[] = JSON.parse(JSON.stringify(entries));
    entriesClone.push(product);
    return entriesClone;
  }),

  on(removeProduct, (entries, product) => {
    const entriesClone: Book[] = JSON.parse(JSON.stringify(entries));
    const found = entriesClone.find(e => e.id == product.id);
    if (found) {
        entriesClone.splice(entriesClone.indexOf(found), 1)
    }
    return entriesClone;
  })
)