import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';
import { CountryState, initialState } from 'src/store/country.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getCountries } from 'src/store/Country.reducers';
import { LoadRegions } from 'src/store/country.actions';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  countryList: any = [];
  @Output() countryData = new EventEmitter()
  regionName: any;
  countriesData$: Observable<any>;
  countresInformation: any;
  items;
  displayDiv= false;
  constructor(private store: Store<CountryState>,
    private fetchDataService: FetchDataService) {
  }
  ngOnInit(): void {
    this.store.dispatch(new LoadRegions());
    this.store.select('countries').subscribe(res => {
      console.log(res)
      if (res.items.countries.length > 0) {
        this.displayDiv = true;
        this.countresInformation = res.items.countries;
        this.countryList = this.countresInformation.map((selectedCountry) => {
          return ({
            id: selectedCountry.alpha3Code,
            name: selectedCountry.name
          });
        });
      }
      if (res.items.regions.length > 0) {
        this.items = res.items.regions;
      }

    });
  }
  changedRegion(value) {
    this.countryList = [];
    console.log(value);
    this.displayDiv = false;
    this.regionName = value;
    this.countryList = [];
    this.countryData.emit([]);
    if(value !== 'select'){
    this.fetchDataService.getCountries(value);
    }

  }
  changedCountry(ev) {
    this.countryData.emit(this.countresInformation.filter((country) => {
      return country.alpha3Code === ev;
    }));
  }
}