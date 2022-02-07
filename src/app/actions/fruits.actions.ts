import { FruitState } from '../reducers/fruit.reducer';
import { createAction, props } from '@ngrx/store';

export const addFruitAction = createAction(
	'[FruitAction] Add Fruit',
	props<{ fruitName: string }>()
);

export const addFruitActionSuccess = createAction(
	'[FruitAction] Add Fruit Success',
	props<{ fruitName: string }>()
);

export const addFruitActionFail = createAction(
	'[FruitAction] Add Fruit Fail',
	props<{ fruitName: string }>()
);

export const loadFruitAction = createAction(
	'[FruitAction] Load Fruits',
	// props<{ payload: FruitState }>()
);

export const loadFruitActionSuccess = createAction(
	'[FruitAction] Load Fruits Success',
	props<{ payload: string[] }>()
);

export const loadFruitActionFail = createAction(
	'[FruitAction] Load Fruits Fail',
	props<{ error: string }>()
);
