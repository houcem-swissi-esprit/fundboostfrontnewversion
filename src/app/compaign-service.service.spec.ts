import { TestBed } from '@angular/core/testing';

import { CompaignServiceService } from './compaign-service.service';

describe('CompaignServiceService', () => {
  let service: CompaignServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaignServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
