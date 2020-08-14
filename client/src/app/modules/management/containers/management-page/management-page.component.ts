import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-management-page',
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="assets/logo.svg" />
          </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-end">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Examples</a>
            <a class="navbar-item">Features</a>
            <a class="navbar-item">Team</a>
            <a class="navbar-item">Archives</a>
            <a class="navbar-item">Help</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .navbar {
        padding: 10px 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
