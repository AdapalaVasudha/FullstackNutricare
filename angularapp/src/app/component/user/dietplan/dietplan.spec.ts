import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dietplan } from './dietplan';

describe('Dietplan', () => {
  let component: Dietplan;
  let fixture: ComponentFixture<Dietplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dietplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dietplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
