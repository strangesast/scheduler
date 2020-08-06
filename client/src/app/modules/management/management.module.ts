import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ManagementPageComponent } from './containers/management-page/management-page.component';

const routes: Routes = [{ path: '', component: ManagementPageComponent }];

@NgModule({
  declarations: [ManagementPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ManagementModule {}
