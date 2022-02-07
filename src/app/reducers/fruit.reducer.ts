import * as FruitActions from '../actions/fruits.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface FruitState {
    loading: boolean,
    loaded: boolean,
    list: string[];
}

const initialState: FruitState = {
    list: ['Apple', 'orange'],
    loading: false,
    loaded: false
};

const fruitReducer = createReducer(
    initialState,
    on(
        FruitActions.loadFruitAction,
        (state: FruitState) => ({
            ...state,
            loaded: false,
            loading: true
        })
    ),

    on(
        FruitActions.loadFruitActionSuccess,
        (state: FruitState, action) => ({
            ...state,
            list: action.payload,
            loaded: true,
            loading: false
        })
    ),

    on(
        FruitActions.addFruitActionFail,
        (state: FruitState, fruit) => ({
            ...state,
            fruit,
            loaded: false,
            loading: false
        })
    )
);

export function reducer(state: FruitState = initialState, action: Action): FruitState {
    return fruitReducer(state, action);
}

