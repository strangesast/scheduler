import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  template: `
    <form [formGroup]="form">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label>Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="First"
                formControlName="first_name"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Middle"
                formControlName="middle_name"
              />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Last"
                formControlName="last_name"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label>Email</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <p class="control has-icons-left">
              <input
                class="input"
                type="email"
                placeholder="someone@example.com"
                formControlName="email"
              />
              <span class="icon is-small is-left">
                <mat-icon>mail</mat-icon>
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  form = this.fb.group({
    first_name: ['', Validators.required],
    middle_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.email],
  });
  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}
}
