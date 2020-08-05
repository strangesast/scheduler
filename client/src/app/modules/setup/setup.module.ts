import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SetupPageComponent } from './containers/setup-page/setup-page.component';

const routes: Routes = [
  {path: '', component: SetupPageComponent },
]


@NgModule({
  declarations: [SetupPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SetupModule { }
