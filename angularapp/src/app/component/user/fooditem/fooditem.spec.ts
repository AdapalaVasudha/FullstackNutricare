import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fooditem } from './fooditem';

describe('Fooditem', () => {
  let component: Fooditem;
  let fixture: ComponentFixture<Fooditem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fooditem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fooditem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
