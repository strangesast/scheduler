import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SetupPageComponent } from './containers/setup-page/setup-page.component';
import { SetupOrgNameFormComponent } from './components/setup-org-name-form/setup-org-name-form.component';
import { SetupCategoryFormComponent } from './components/setup-category-form/setup-category-form.component';

const routes: Routes = [
  {path: '', component: SetupPageComponent},
];

@NgModule({
  declarations: [SetupPageComponent, SetupOrgNameFormComponent, SetupCategoryFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class SetupModule {}
