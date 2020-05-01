import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {


  @Input() countryInformation : any = [];
  constructor() {

   }

  ngOnInit(): void {
  }

}
