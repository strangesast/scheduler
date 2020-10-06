import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-container',
  template: `
  <div class="container">
    <header>
      <h1>Scheduler</h1>
      <p>Create an account.</p>
    </header>
    <section>
      <form>
        <p>
          <mat-form-field appearance="outline">
            <mat-label>Name</mat-label>
            <input matInput type="text" placeholder="John Doe">
          </mat-form-field>
        </p>
        <p>
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input matInput type="email" placeholder="example@example.com">
          </mat-form-field>
        </p>
        <p>
          <mat-form-field appearance="outline">
            <mat-label>Organization Name</mat-label>
            <input matInput type="text" placeholder="John Doe, Inc.">
          </mat-form-field>
        </p>
        <p>
          <button mat-flat-button type="submit" color="primary">Next</button>
        </p>
      </form>
    </section>
    <section>
      <ul class="links">
        <li>
          <a href="https://github.com/strangesast/kelly"><span>Github </span><mat-icon>launch</mat-icon></a>
        </li>
      </ul>
    </section>
  </div>
  `,
  styleUrls: ['./config-container.component.scss'],
})
export class ConfigContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
