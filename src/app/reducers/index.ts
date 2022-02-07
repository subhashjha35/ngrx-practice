import { FruitState } from './fruit.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromFruitReducer from '../reducers/fruit.reducer';
import { storeLogger } from 'ngrx-store-logger';
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

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<AppState> = {
  fruits: fromFruitReducer.reducer
};

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [logger];
