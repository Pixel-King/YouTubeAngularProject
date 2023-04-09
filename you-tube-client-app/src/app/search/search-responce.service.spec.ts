import { TestBed } from '@angular/core/testing';

import { SearchResponceService } from './search-responce.service';

describe('SearchResponceService', () => {
  let service: SearchResponceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResponceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
