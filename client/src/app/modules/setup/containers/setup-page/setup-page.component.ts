import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  template: `
    <p>
      setup-page works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
