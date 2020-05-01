import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Store } from '@ngrx/store';
import { CountryState } from './country.state';
import { CountryActions, CountryActionTypes, Countries, Failure, Regions } from './country.actions';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators'
import { of, Observable, merge } from 'rxjs';
import { Action } from '@ngrx/store';
@Injectable()
export class CountryEffects {

    constructor(private fetchDataService: FetchDataService,
        private actions: Actions,
        private store: Store<CountryState>) {

    }

    @Effect()
    getEuropeCountries: Observable<Action> = this.actions.pipe(
        ofType<any>(CountryActionTypes.LOAD_EUROPE_COUNTRIES),

        mergeMap((actions: Countries) => 
            this.fetchDataService.getEuropeCountries().pipe(
                map((countries: any) => 
                    new Countries(countries)
                ),
                catchError((err: any) => of(new Failure(err)))
            )
        )
    )

    @Effect()
    getAsiaCountries: Observable<Action> = this.actions.pipe(
        ofType<any>(CountryActionTypes.LOAD_ASIA_COUNTRIES),

        mergeMap((actions: Countries) => 
            this.fetchDataService.getAsiaCountries().pipe(
                map((countries: any) => 
                    new Countries(countries)
                ),
                catchError((err: any) => of(new Failure(err)))
            )
        )
    )
    @Effect()
    getRegions: Observable<Action> = this.actions.pipe(
        ofType<any>(CountryActionTypes.LOAD_REGIONS),

        mergeMap((actions: Countries) => 
            this.fetchDataService.getRegions().pipe(
                map((regions: any) => 
                    new Regions(regions)
                ),
                catchError((err: any) => of(new Failure(err)))
            )
        )
    )
}