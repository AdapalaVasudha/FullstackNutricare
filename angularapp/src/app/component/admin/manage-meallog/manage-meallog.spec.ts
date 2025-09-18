import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMeallog } from './manage-meallog';

describe('ManageMeallog', () => {
  let component: ManageMeallog;
  let fixture: ComponentFixture<ManageMeallog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMeallog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMeallog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
