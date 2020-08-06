import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { SetupPageComponent } from './containers/setup-page/setup-page.component';
import { SetupFormContainerComponent } from './components/setup-form-container/setup-form-container.component';
import { SetupFormOrgComponent } from './components/setup-form-org/setup-form-org.component';
import { SetupFormScheduleComponent } from './components/setup-form-schedule/setup-form-schedule.component';
import { SetupFormRolesComponent } from './components/setup-form-roles/setup-form-roles.component';
import { SetupFormEmployeesComponent } from './components/setup-form-employees/setup-form-employees.component';
import { SetupFormEventsComponent } from './components/setup-form-events/setup-form-events.component';

const routes: Routes = [{ path: '', component: SetupPageComponent }];

@NgModule({
  declarations: [
    SetupPageComponent,
    SetupFormContainerComponent,
    SetupFormOrgComponent,
    SetupFormScheduleComponent,
    SetupFormRolesComponent,
    SetupFormEmployeesComponent,
    SetupFormEventsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SetupModule {}
