import { Injectable, Optional } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  readonly VAPID_PUBLIC_KEY = environment.push.publicKey;

  constructor(
    @Optional()
    public swPush: SwPush
  ) {}

  subscribeToNotifications(): void {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => console.log('sub', sub))
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }
}
