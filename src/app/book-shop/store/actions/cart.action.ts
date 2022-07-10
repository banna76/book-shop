import { Action, createAction, props } from '@ngrx/store';
import { Author, Book } from "../../mock-data/models";


export const clearCart = createAction('Cleat Cart');
export const addProduct = createAction('Add Product', props<Book>());
export const removeProduct = createAction('Remove Product', props<Book>());