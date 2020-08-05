import { Input, Output, EventEmitter, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DAYS_OF_WEEK } from '../../../../util';

@Component({
  selector: 'app-setup-form-schedule',
  template: `
  <form [formGroup]="form">
    <h2>Choose week start day.</h2>
    <mat-form-field appearance="fill">
      <mat-label>Week Start Day</mat-label>
      <mat-select formControlName="weekStartDate">
        <mat-option value="value" *ngFor="let value of weekDays">{{value}}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-button-toggle-group multiple="true" name="openDays" aria-label="Days Open" formControlName="daysOpen">
      <mat-button-toggle [value]="value" *ngFor="let value of weekDays">{{value}}</mat-button-toggle>
    </mat-button-toggle-group>
  </form>
  `,
  styles: [
    `
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupFormScheduleComponent implements OnInit {
  @Output()
  completed = new EventEmitter();

  weekDays = DAYS_OF_WEEK;
  form = this.fb.group({
    weekStartDate: ['', Validators.required],
    daysOpen: [['Mon', 'Fri']],
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
