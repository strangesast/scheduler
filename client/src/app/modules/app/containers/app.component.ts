import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        height: 100%;
        display: block;
        overflow: auto;
      }
    `,
  ],
})
export class AppComponent {
  title = 'arriba';
}
