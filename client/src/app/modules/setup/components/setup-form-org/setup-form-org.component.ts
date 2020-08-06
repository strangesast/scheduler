import {
  Input,
  Output,
  EventEmitter,
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup-form-org',
  template: `
    <form [formGroup]="form">
      <h2>Enter a name for your organization</h2>
      <mat-form-field appearance="fill">
        <mat-label>Organization</mat-label>
        <input formControlName="org" matInput placeholder="Placeholder" />
      </mat-form-field>
      <div>
        <button type="button" class="button is-primary" (click)="next()">
          Next
        </button>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupFormOrgComponent implements OnInit {
  @Output()
  completed = new EventEmitter();

  form = this.fb.group({
    org: ['', Validators.required],
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  next(): void {
    this.completed.emit();
  }
}
