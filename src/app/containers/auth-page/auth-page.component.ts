import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  template: `
    <header>
      <div class="container">
        <span class="brand">Scheduler</span>
      </div>
    </header>
    <section>
      <form [formGroup]="form" class="mat-elevation-z1">
        <div>
          <h1>Sign In</h1>
        </div>
        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input
            matInput
            type="email"
            placeholder="someone@example.com"
            formControlName="email"
          />
          <mat-hint>Your Email</mat-hint>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Password</mat-label>
          <input
            matInput
            type="password"
            placeholder="password123"
            formControlName="password"
          />
          <mat-hint>Your Password</mat-hint>
        </mat-form-field>
        <div class="controls">
          <button type="submit" mat-flat-button color="primary">Submit</button>
          <a type="button" mat-stroked-button>Create Account</a>
        </div>
      </form>
    </section>
    <footer>
      <div class="container">
        <ul>
          <li>
            <a href="https://github.com/strangesast/scheduler">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        height: 100%;
        color: inherit;
      }
      .brand {
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        font-style: italic;
        font-size: 28px;
        padding: 0 12px;
      }
      h1 {
        color: inherit;
        margin: 0 0 12px 0;
        font-size: 40px;
        text-align: center;
        font-family: 'Pacifico', cursive;
        font-weight: 400;
      }
      section {
        flex: auto 1 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      form {
        flex: 400px 0 1;

        display: grid;
        max-width: 400px;
        grid-gap: 12px;
        margin: 0 12px;
        padding: 40px;

        font-size: 16px;
        border-radius: 8px;
        border: 1px solid #ececec;
        background: white;
      }
      form .controls {
        padding: 12px 0;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }

      header .container,
      footer .container {
        max-width: 1200px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        margin: 0 auto;
      }
      @media(min-width: 800px) {
        header .container,
        footer .container {
          margin: 0 8%;
        }
      }
      header .container {
        height: 80px;
      }
      footer .container {
        height: 120px;
        color: grey;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
      }
      ul li {
        padding: 0 12px;
      }
    `,
  ],
})
export class AuthPageComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(public service: AuthService, public fb: FormBuilder) {}

  ngOnInit(): void {}
}
