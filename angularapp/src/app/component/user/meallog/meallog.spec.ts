import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meallog } from './meallog';

describe('Meallog', () => {
  let component: Meallog;
  let fixture: ComponentFixture<Meallog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meallog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meallog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
