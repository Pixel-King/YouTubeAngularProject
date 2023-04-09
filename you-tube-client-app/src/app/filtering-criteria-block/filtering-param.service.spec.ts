import { TestBed } from '@angular/core/testing';

import { FilteringParamService } from './filtering-param.service';

describe('FilteringParamService', () => {
  let service: FilteringParamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilteringParamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
