import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

const components = [];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components,
  ],
  exports: components,
})
export class MaterialModule { }
