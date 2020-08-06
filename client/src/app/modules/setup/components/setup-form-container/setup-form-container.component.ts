import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-setup-form-container',
  template: `
    <div class="box" [ngSwitch]="step$ | async">
      <app-setup-form-org
        *ngSwitchCase="0"
        (completed)="nextStep()"
      ></app-setup-form-org>
      <app-setup-form-schedule
        *ngSwitchCase="1"
        (completed)="nextStep()"
      ></app-setup-form-schedule>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        max-width: 520px;
      }
      form {
        display: grid;
        grid-gap: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupFormContainerComponent {
  step$ = new BehaviorSubject(0);

  nextStep(): void {
    this.step$.next(this.step$.getValue() + 1);
  }
}
