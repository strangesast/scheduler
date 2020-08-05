import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  template: `
    <section class="hero is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="assets/logo.svg"/>
              </a>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <!--
                <a class="navbar-item is-active">Home</a>
                <a class="navbar-item">Examples</a>
                <a class="navbar-item">Documentation</a>
                -->
                <span class="navbar-item">
                  <a class="button is-inverted">
                    <span class="icon">
                      <mat-icon>person</mat-icon>
                    </span>
                    <span>Sign In</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="title">
            <figure class="image is-5by3">
              <img src="assets/logo.svg"/>
            </figure>
          </div>
          <p class="subtitle">
            <a class="button is-primary" [routerLink]="['/setup']">Get Started</a>
          </p>
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
      .title {
        max-width: 580px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
