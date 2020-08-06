import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { DaysPickerComponent } from './components/days-picker/days-picker.component';

@NgModule({
  declarations: [DaysPickerComponent],
  imports: [CommonModule],
})
export class SharedModule {}
