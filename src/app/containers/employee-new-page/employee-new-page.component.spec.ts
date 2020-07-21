import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewPageComponent } from './employee-new-page.component';

describe('EmployeeNewPageComponent', () => {
  let component: EmployeeNewPageComponent;
  let fixture: ComponentFixture<EmployeeNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
