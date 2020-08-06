import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <h1 class="title">Sign In With Email</h1>
    <p class="description">
      No mail will be sent to this address after it is verified.
    </p>
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Email</mat-label>
        <input type="email" matInput placeholder="john.doe@example.com" />
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input type="password" matInput placeholder="secret123" />
      </mat-form-field>
      <button class="button is-block is-primary is-fullwidth is-medium">
        Submit
      </button>
      <p class="description">
        <a [routerLink]="['../register']">Create Account</a>
      </p>
    </form>
  `,
  styles: [
    `
      :host,
      form {
        display: flex;
        flex-direction: column;
      }
      .description {
        margin: 1.4rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}
}
