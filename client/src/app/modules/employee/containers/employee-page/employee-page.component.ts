import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DAYS_OF_WEEK } from '../../../../util';

@Component({
  selector: 'app-employee-page',
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
    <section class="section">
      <div class="container">
        <p>Each Employee Weekly</p>
        <div class="shift-employee-week-table">
          <div class="shift-table-employees">
            <div></div>
            <div *ngFor="let employee of employees">
            {{employee.name}}
            </div>
          </div>
          <div class="shift-table shift-table-shifts">
            <div *ngFor="let day of days" class="shift-day">{{ day.short }} {{ day.date | date:'shortDate'}}</div>
            <ng-container *ngFor="let employee of employees">
              <div *ngFor="let day of weekDays.data" class="shift-date">
                <div class="date-label">{{ day.getDate() }}</div>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p>
          Week Table: {{ weekDays.range[0] | date: 'shortDate' }} -
          {{ weekDays.range[1] | date: 'shortDate' }}
        </p>
        <div class="shift-week-table shift-table">
          <div *ngFor="let day of days" class="shift-day">{{ day.short }}</div>
          <div *ngFor="let day of weekDays.data" class="shift-date">
            <div class="date-label">{{ day.getDate() }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p>
          Month Table: {{ monthDays.range[0] | date: 'shortDate' }} -
          {{ monthDays.range[1] | date: 'shortDate' }}
        </p>
        <div class="shift-month-table shift-table">
          <div *ngFor="let day of days" class="shift-day">{{ day.short }}</div>
          <div *ngFor="let day of monthDays.data" class="shift-date">
            <div class="date-label">{{ day.getDate() }}</div>
            <div class="date-content">
              <span>1 Shift Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit {
  days = (() => {
    const start = new Date();
    start.setDate(start.getDate() - start.getDay());
    const data = Array.from(Array(7));
    for (let i = 0; i < 7; i++) {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      data[i] = {date, short: DAYS_OF_WEEK[i]};
    }
    return data;
  })();

  monthDays = (() => {
    const start = new Date();
    start.setDate(start.getDate() - start.getDay());
    const data = Array.from(Array(14));
    for (let i = 0; i < 14; i++) {
      const d = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + i
      );
      data[i] = d;
    }
    const range = [data[0], data[data.length - 1]];
    return { data, range };
  })();

  weekDays = (() => {
    const start = new Date();
    start.setDate(start.getDate() - start.getDay());
    const data = Array.from(Array(7));
    for (let i = 0; i < 7; i++) {
      data[i] = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + i
      );
    }
    const range = [data[0], data[data.length - 1]];
    return { data, range };
  })();

  employees = Array.from(Array(12)).map((_, i) => ({name: `Employee ${i + 1}`}));

  constructor() {}

  ngOnInit(): void {}
}
