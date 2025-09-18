import { TestBed } from '@angular/core/testing';

import { Fooditem } from './fooditem';

describe('Fooditem', () => {
  let service: Fooditem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fooditem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
