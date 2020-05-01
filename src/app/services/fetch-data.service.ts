import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryState } from 'src/store/country.state';
import { Store } from '@ngrx/store';
import { LoadEuropeCountries, LoadAsiaCountries } from 'src/store/country.actions';
import { of } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient,
    private store: Store<CountryState> ) { }

  getEuropeCountries() {
    return this.http.get<any>('https://restcountries.eu/rest/v2/region/europe');
  }
  getAsiaCountries() {
    return this.http.get<any>('https://restcountries.eu/rest/v2/region/asia');
  }
  getRegions() {
   return of([{
        id: 'Europe',
        name: 'Europe'
      },
      {
        id: 'Asia',
        name: 'Asia'
      }]);
  }
  getCountries(countryName : string) {
    if(countryName === 'Europe'){
    this.store.dispatch(new LoadEuropeCountries());
    }
    else{
    this.store.dispatch(new LoadAsiaCountries());
    }
  }
}
