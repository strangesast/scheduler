import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFormContainerComponent } from './setup-form-container.component';

describe('SetupFormContainerComponent', () => {
  let component: SetupFormContainerComponent;
  let fixture: ComponentFixture<SetupFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
