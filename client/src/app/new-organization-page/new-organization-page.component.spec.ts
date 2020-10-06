import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrganizationPageComponent } from './new-organization-page.component';

describe('NewOrganizationPageComponent', () => {
  let component: NewOrganizationPageComponent;
  let fixture: ComponentFixture<NewOrganizationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrganizationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrganizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
