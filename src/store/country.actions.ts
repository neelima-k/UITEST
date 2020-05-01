import { Action } from '@ngrx/store';    

export enum CountryActionTypes{
    LOAD_EUROPE_COUNTRIES = '[Load Europe Counries] List',
    LOAD_ASIA_COUNTRIES = '[Load Asia Counries] List',
    LOAD_REGIONS = '[ Load Regions ] List',
    REGIONS = '[Regions] List',
    COUNTRIES = '[Country] List',
    FAILURE = '[Fail] message'
}

export class LoadEuropeCountries implements Action{
    public readonly type = CountryActionTypes.LOAD_EUROPE_COUNTRIES;
 }
 export class LoadRegions implements Action{
    public readonly type = CountryActionTypes.LOAD_REGIONS;
 }
 export class LoadAsiaCountries implements Action{
    public readonly type = CountryActionTypes.LOAD_ASIA_COUNTRIES;
 }

export class Regions implements Action{
   public readonly type = CountryActionTypes.REGIONS;
   constructor(public payload: any){}
}

export class Countries implements Action{
    public readonly type = CountryActionTypes.COUNTRIES;
    constructor(public payload: any){}
 }

 export class Failure implements Action{
    public readonly type = CountryActionTypes.FAILURE;
    constructor(public payload: any){}
 }

 export type CountryActions = Regions | Countries | Failure | LoadEuropeCountries | LoadAsiaCountries | LoadRegions;