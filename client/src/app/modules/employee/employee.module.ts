import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeePageComponent } from './containers/employee-page/employee-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [{ path: '', component: EmployeePageComponent }];

@NgModule({
  declarations: [EmployeePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class EmployeeModule {}
