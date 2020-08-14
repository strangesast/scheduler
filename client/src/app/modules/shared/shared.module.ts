import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DaysPickerComponent } from './components/days-picker/days-picker.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  DaysPickerComponent,
  CalendarComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, MaterialModule],
  exports: [...components, CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
