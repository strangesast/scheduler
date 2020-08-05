import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SplashPageComponent } from './containers/splash-page/splash-page.component';
import { SplashGuard } from './guards/splash.guard';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: '', canActivate: [SplashGuard], component: SplashPageComponent },
];

@NgModule({
  declarations: [SplashPageComponent],
  imports: [
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
})
export class SplashModule {}
