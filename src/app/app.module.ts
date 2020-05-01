import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RegionsComponent } from './regions/regions.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';
import { countryReducers } from 'src/store/Country.reducers';
import { EffectsModule } from '@ngrx/effects';
import {CountryEffects} from 'src/store/country.effects';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../app/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    RegionsComponent,
    CountryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('countries', {items:countryReducers}),
    EffectsModule.forRoot([CountryEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
    
  ],
  exports:[EffectsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
