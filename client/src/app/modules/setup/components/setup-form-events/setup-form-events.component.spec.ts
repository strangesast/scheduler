import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupFormEventsComponent } from './setup-form-events.component';

describe('SetupFormEventsComponent', () => {
  let component: SetupFormEventsComponent;
  let fixture: ComponentFixture<SetupFormEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupFormEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
