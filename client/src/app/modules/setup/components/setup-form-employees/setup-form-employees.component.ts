import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-form-employees',
  template: `
    <p>
      setup-form-employees works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupFormEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
