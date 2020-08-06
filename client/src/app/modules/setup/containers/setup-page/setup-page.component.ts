import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  template: `
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <p class="title">Hey, this is a title</p>
          <app-setup-form-container></app-setup-form-container>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
