import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDietplan } from './manage-dietplan';

describe('ManageDietplan', () => {
  let component: ManageDietplan;
  let fixture: ComponentFixture<ManageDietplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageDietplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDietplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
