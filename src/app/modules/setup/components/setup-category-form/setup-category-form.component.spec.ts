import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCategoryFormComponent } from './setup-category-form.component';

describe('SetupCategoryFormComponent', () => {
  let component: SetupCategoryFormComponent;
  let fixture: ComponentFixture<SetupCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
