import { TestBed } from '@angular/core/testing';

import { Dietplan } from './dietplan';

describe('Dietplan', () => {
  let service: Dietplan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dietplan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
