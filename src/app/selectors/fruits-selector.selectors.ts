import { AppState } from './../reducers/app.reducer';
import { FruitState } from './../reducers/fruit.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFruits from '../reducers/fruit.reducer';

export const getAllFruits = createFeatureSelector<fromFruits.FruitState>('fruits');

export const getFruits = createSelector(getAllFruits, (state: AppState) => state.fruits);
