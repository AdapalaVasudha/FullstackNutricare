import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFooditem } from './manage-fooditem';

describe('ManageFooditem', () => {
  let component: ManageFooditem;
  let fixture: ComponentFixture<ManageFooditem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFooditem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFooditem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
