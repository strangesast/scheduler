import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DAYS_OF_WEEK } from '../../../../util';

type Sig = (v: string[]) => void;

@Component({
  selector: 'app-days-picker',
  template: `
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaysPickerComponent implements OnInit, ControlValueAccessor {

  value: string[] = [];

  writeValue(nextValue: string[]): void {
    this.value = nextValue;
  }

  private onTouched: Sig = (value: string[]) => {};
  private onChanged: Sig = (value: string[]) => {};

  registerOnChange(fn: Sig): void {
    this.onTouched = fn;
  }

  registerOnTouched(fn: Sig): void {
    this.onTouched = fn;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
