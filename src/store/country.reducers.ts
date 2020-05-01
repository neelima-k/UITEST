import { initialState, CountryState } from './country.state';
import { CountryActions, CountryActionTypes } from './country.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export function countryReducers (state = initialState, action: CountryActions): CountryState {
    switch (action.type) {
        case CountryActionTypes.LOAD_EUROPE_COUNTRIES: {
            return {
                ...state,
            }
        }
        case CountryActionTypes.LOAD_ASIA_COUNTRIES: {
            return {
                ...state,
            }
        }
        case CountryActionTypes.LOAD_REGIONS: {
            return {
                ...state,
            }
        }
        case CountryActionTypes.COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case CountryActionTypes.REGIONS: {
            return {
                ...state,
                regions: action.payload
            }
        }
        case CountryActionTypes.FAILURE: {
            return {
                ...state,
                regions: action.payload
            }
        }
        default:
            return state;

    }
}

export const regions = [{
    id: 'Europe',
    name: 'Europe'
  },
  {
    id: 'Asia',
    name: 'Asia'
  }];

export const getState = createFeatureSelector<CountryState>('countries');

export const getCountries =() => createSelector(
    getState,
  (state: CountryState) => state
);