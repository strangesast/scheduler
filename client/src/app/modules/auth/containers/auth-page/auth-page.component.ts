import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  template: `
    <section class="container">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register">
          <div class="columns">
            <div class="column left">
              <h1 class="title">Sign In with these providers.</h1>
              <ul>
                <li>Google</li>
                <li>Google</li>
                <li>Google</li>
                <li>Google</li>
              </ul>
            </div>
            <div class="column right">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2">
          <br>
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
  styles: [`
  :host {
    display: block;
    height: 100vh;
  }
  .register {
    margin-top: 10rem;
    background: white;
    border-radius: 10px;
  }
  .left, .right {
    margin: 4.5rem;
  }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
