import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeePageComponent } from './containers/employee-page/employee-page.component';

const routes: Routes = [{ path: '', component: EmployeePageComponent }];

@NgModule({
  declarations: [EmployeePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EmployeeModule {}
