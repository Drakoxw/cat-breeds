import { TestBed } from '@angular/core/testing';

import { BreedGraphQlService } from './breed-graph-ql.service';

describe('BreedGraphQlService', () => {
  let service: BreedGraphQlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedGraphQlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
