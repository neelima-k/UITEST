import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { FetchDataService } from '../services/fetch-data.service';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;
class mockFetchDataService{

}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsComponent ],
      providers:[{provide : FetchDataService, useValue: new mockFetchDataService()}]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
