import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { loadBookSuccess, loadBookFail } from '../actions/books.action';

@Injectable()
export class FruitsEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataService: FruitsDataService
  ) {}

  loadFruits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFruits),
      switchMap(() =>
        this.dataService.loadFruits$().pipe(
          map((fruits) => loadFruitsSuccess({ fruits })),
          catchError((error) => of(loadFruitsFail({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return loadFruits();
  }
}
