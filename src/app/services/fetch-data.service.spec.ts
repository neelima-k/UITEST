import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FetchDataService', () => {
  let service: FetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient],
      imports:[HttpClientModule]
    });
    service = TestBed.inject(FetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
