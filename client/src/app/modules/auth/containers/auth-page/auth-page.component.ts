import {
  Component,
  ComponentRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-auth-page',
  template: `
    <section class="container">
      <div class="columns is-multiline">
        <div class="column is-6 is-offset-3 register">
          <div class="columns content">
            <div class="column right has-text-centered">
              <router-outlet (activate)="activate($event)"></router-outlet>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-3">
          <br />
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <a [routerLink]="['/']"><i>Scheduler</i></a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
      .register {
        margin-top: 10rem;
        background: white;
        border-radius: 10px;
        border: 2px solid #eee;
      }
      .content {
        min-height: auto;
        margin: 4.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  activeChild$ = new ReplaySubject<string>(1);

  constructor() {}

  activate(componentRef: ComponentRef<unknown>): void {
    this.activeChild$.next(
      componentRef instanceof LoginFormComponent ? 'login' : 'register'
    );
  }

  ngOnInit(): void {}
}
