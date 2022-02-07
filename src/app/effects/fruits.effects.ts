import { loadFruitAction, loadFruitActionSuccess, loadFruitActionFail } from './../actions/fruits.actions';
import { FruitsService } from './../services/fruits.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class FruitsEffects {
    constructor(
      private actions$: Actions,
      private fruitsService: FruitsService) { }

    loadFruits$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadFruitAction),
            switchMap(() => this.fruitsService.loadFruits()
                .pipe(first(),
                    map((fruits: string[]) => loadFruitActionSuccess({ payload: fruits })),
                    catchError(
                      async(error: Error) => loadFruitActionFail({ error: error.message })
                    )
                )
            )
        )
    )
}
