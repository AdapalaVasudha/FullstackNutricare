import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLanding } from './user-landing';

describe('UserLanding', () => {
  let component: UserLanding;
  let fixture: ComponentFixture<UserLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
