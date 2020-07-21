import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-setup-page',
  template: `
  <section>
    <form [formGroup]="form" class="mat-elevation-z1" [ngSwitch]="step">
      <div *ngSwitchCase="0" [@anim]="step" class="content">
        <p>Choose a unique organization name.</p>
        <mat-form-field appearance="fill">
          <mat-label>Organization</mat-label>
          <input
            matInput
            placeholder="Some org."
            formControlName="organization"
          />
          <mat-hint>Your organization name.</mat-hint>
        </mat-form-field>
      </div>
      <div formArrayName="categories" *ngSwitchCase="1" [@anim]="step" class="content">
        <mat-form-field
        *ngFor="let control of categories.controls; index as i"
        [formGroupName]="i"
        appearance="fill">
          <mat-label>Employee Category</mat-label>
          <input matInput placeholder="Category 1" formControlName="name" />
          <mat-hint>Employee Shift Category</mat-hint>
        </mat-form-field>
        <div>
          <button mat-stroked-button type="button" (click)="addCategory()">Add Shift Category</button>
        </div>
      </div>
      <div class="controls">
        <button mat-flat-button color="primary" type="button" *ngIf="step < 4" (click)="nextStep()">Next</button>
        <button mat-flat-button type="button" *ngIf="step > 0" (click)="prevStep()">Back</button>
      </div>
    </form>
  </section>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      section {
        flex: auto 1 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      form {
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 12px;
        border-radius: 8px;
        padding: 40px;
        border: 1px solid #ececec;
        background: white;
      }
      form > .content {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        display: grid;
        grid-gap: 12px;
      }
      form > .controls {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }
    `,
  ],
  animations: [
    trigger('anim', [
      transition(':enter', [
        style({transform: 'translate(200px, 0)'}),
        animate(1000, style({transform: ''})),
      ]),
      transition(':leave', [
        style({transform: ''}),
        animate(1000, style({transform: 'translate(-200px, 0)'})),
      ])

    ]),
  ],
})
export class SetupPageComponent implements OnInit {
  step = 0;

  form = this.fb.group({
    organization: ['', Validators.required],
    categories: this.fb.array([
      this.fb.group({
        id: ['default', Validators.required],
        name: ['Default', Validators.required],
      }),
    ]),
  });

  get categories() {
    return this.form.get('categories') as FormArray;
  }

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  prevStep() {
    if (this.step > 0) {
      this.step = this.step - 1;
    }
  }
  nextStep() {
    this.step = this.step + 1;
  }

  addCategory() {
    this.categories.push(
      this.fb.group({
        id: ['new-category', Validators.required],
        name: ['New Category', Validators.required],
      })
    );
  }
}
