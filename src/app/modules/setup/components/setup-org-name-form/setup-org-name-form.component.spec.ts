import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOrgNameFormComponent } from './setup-org-name-form.component';

describe('SetupOrgNameFormComponent', () => {
  let component: SetupOrgNameFormComponent;
  let fixture: ComponentFixture<SetupOrgNameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupOrgNameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOrgNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
