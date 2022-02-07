import { AppState } from './../reducers/app.reducer';
import { createAction, props } from '@ngrx/store';

export const loadAppActionSuccess = createAction(
    '[FruitAction] Load Fruits',
    props<{ AppState: AppState }>()
);
