import { TestBed } from '@angular/core/testing';

import { Meallog } from './meallog';

describe('Meallog', () => {
  let service: Meallog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Meallog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
