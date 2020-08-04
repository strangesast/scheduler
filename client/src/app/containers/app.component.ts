import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SwPush } from '@angular/service-worker';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-root',
  template: `
  <div class="content">
    <p>{{title | titlecase}}</p>
  </div>
  <button>Test</button>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'arriba';

  readonly VAPID_PUBLIC_KEY = environment.push.publicKey;

  constructor(public firestore: AngularFirestore, public swPush: SwPush) {}

  subscribeToNotifications(): void {
    this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub => console.log('sub', sub))
        .catch(err => console.error('Could not subscribe to notifications', err));
  }
}
