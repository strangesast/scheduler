import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  template: `
    <h1 class="title">Register With Email</h1>
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
            <button class="button is-primary">Create Account</button>
          </div>
          <div class="level-item">
            <a [routerLink]="['../signin']">Sign In Instead</a>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
