import { createFeatureSelector, createSelector } from '@ngrx/Store';
import { CountryState } from './country.state';

export const getState = createFeatureSelector<CountryState>('countries');

export const getCountries =() => createSelector(
    getState,
  (state: CountryState) => state
);