import { Action } from '@ngrx/store';
import { Author, Book } from "../../mock-data/models";

export const LOAD_BOOKS_SUCCESS = '[Book] Load Books Success';
export const LOAD_BOOKS_FAIL = '[Book] Load Books Fail';

export class LoadBooksSuccess implements Action {
    readonly type = LOAD_BOOKS_SUCCESS;
    constructor(public payload: Book[]) {}
}

export class LoadBooksFail implements Action {
    readonly type = LOAD_BOOKS_FAIL;
    constructor(public payload: any) {}
  }

export type LoadBooksActions = LoadBooksSuccess | LoadBooksFail;