import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFormEmployeesComponent } from './setup-form-employees.component';

describe('SetupFormEmployeesComponent', () => {
  let component: SetupFormEmployeesComponent;
  let fixture: ComponentFixture<SetupFormEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFormEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
