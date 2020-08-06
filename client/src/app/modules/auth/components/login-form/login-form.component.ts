import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <h1 class="title">Sign In With Email</h1>
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <mat-label>Email</mat-label>
        <input type="email" matInput placeholder="john.doe@example.com">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input type="password" matInput placeholder="secret123">
      </mat-form-field>
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <button type="submit" class="button is-primary">Submit</button>
          </div>
          <div class="level-item">
            <a [routerLink]="['../register']">Create Account</a>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
