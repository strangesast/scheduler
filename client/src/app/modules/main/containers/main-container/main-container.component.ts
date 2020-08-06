import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DAYS_OF_WEEK } from '../../../../util';

@Component({
  selector: 'app-main-container',
  template: `
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="assets/logo.svg" />
          </a>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="menu is-hidden-mobile">
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li><a class="is-active">Dashboard</a></li>
              <li><a>Customers</a></li>
              <li><a>Other</a></li>
            </ul>
            <p class="menu-label">Administration</p>
            <ul class="menu-list">
              <li><a>Team Settings</a></li>
              <li>
                <a>Manage Your Team</a>
                <ul>
                  <li><a>Members</a></li>
                  <li><a>Members</a></li>
                  <li><a>Members</a></li>
                  <li><a>Members</a></li>
                  <li><a>Members</a></li>
                  <li><a>Members</a></li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <section class="hero is-primary is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Scheduler</h1>
                <h2 class="subtitle">10 Shifts this week</h2>
              </div>
            </div>
          </section>
          <div class="card">
            <div class="card-table">
              <div class="content">
                <table class="table is-fullwidth is-striped">
                  <tr>
                    <th *ngFor="let day of days">{{ day }}</th>
                  </tr>
                  <tr *ngFor="let row of rows">
                    <td *ngFor="let col of row">{{ col }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <p>Hey, this is a <strong>footer</strong></p>
      </div>
    </footer>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent implements OnInit {
  days = DAYS_OF_WEEK;
  rows = Array.from(Array(20)).map((_, i) => DAYS_OF_WEEK.slice());
  constructor() {}

  ngOnInit(): void {}
}
