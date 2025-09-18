import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glucoselog } from './glucoselog';

describe('Glucoselog', () => {
  let component: Glucoselog;
  let fixture: ComponentFixture<Glucoselog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glucoselog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glucoselog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
