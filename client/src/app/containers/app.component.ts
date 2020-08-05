import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SwPush } from '@angular/service-worker';

import { environment } from '../../environments/environment';

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
