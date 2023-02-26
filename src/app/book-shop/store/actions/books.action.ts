import { Action, createAction, props } from '@ngrx/store';
import { Author, Book } from "../../mock-data/models";

export const loadBooks = createAction('Load Books');
export const loadBookSuccess = createAction('Load Books Success', props<Book>());
export const loadBookFail = createAction('Load Books Fail', props<{ error: string }>());
