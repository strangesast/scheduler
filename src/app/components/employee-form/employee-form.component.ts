import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="fill">
        <mat-label>First Name</mat-label>
        <input matInput placeholder="John" formControlName="firstName" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Last Name</mat-label>
        <input matInput placeholder="Doe" formControlName="lastName" />
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Phone Number</mat-label>
        <input matInput placeholder="716-555-5555" formControlName="phone" />
      </mat-form-field>
      <div>
        <button mat-flat-button type="button" color="primary">Create</button>
      </div>
    </form>
  `,
  styles: [
    `
      form {
        display: grid;
        grid-gap: 12px;
        padding: 20px;
      }
    `,
  ],
})
export class EmployeeFormComponent implements OnInit {
  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: [''],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}
}
