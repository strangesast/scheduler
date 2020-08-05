import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-form-roles',
  template: `
    <p>
      setup-form-roles works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupFormRolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
