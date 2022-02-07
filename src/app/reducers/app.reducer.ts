import { environment } from './../../environments/environment';
import { FruitState } from './fruit.reducer';
import * as fromFruitReducer from './fruit.reducer';
import { ActionReducerMap, MetaReducer, State } from '@ngrx/store';

export interface AppState {
    fruits: FruitState;
}

const initialState: AppState = {
    fruits: {
        loading: false,
        loaded: true,
        list: ['Apple', 'Banana']
    }
};

export const reducers: ActionReducerMap<AppState> = {
    fruits: fromFruitReducer.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

