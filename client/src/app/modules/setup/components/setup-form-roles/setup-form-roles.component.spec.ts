import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFormRolesComponent } from './setup-form-roles.component';

describe('SetupFormRolesComponent', () => {
  let component: SetupFormRolesComponent;
  let fixture: ComponentFixture<SetupFormRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetupFormRolesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
