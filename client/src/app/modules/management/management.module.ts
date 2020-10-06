import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ManagementPageComponent } from './containers/management-page/management-page.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [{ path: '', component: ManagementPageComponent }];

@NgModule({
  declarations: [ManagementPageComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
})
export class ManagementModule {}
