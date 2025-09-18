import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGlucoselog } from './manage-glucoselog';

describe('ManageGlucoselog', () => {
  let component: ManageGlucoselog;
  let fixture: ComponentFixture<ManageGlucoselog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageGlucoselog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGlucoselog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
