import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-form-events',
  template: `
    <p>
      setup-form-events works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupFormEventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
