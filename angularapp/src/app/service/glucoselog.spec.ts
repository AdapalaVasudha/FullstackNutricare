import { TestBed } from '@angular/core/testing';

import { Glucoselog } from './glucoselog';

describe('Glucoselog', () => {
  let service: Glucoselog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Glucoselog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
