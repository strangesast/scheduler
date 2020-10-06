import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ConfigPageComponent } from './config-page/config-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { InitGuard } from './init.guard';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: '', canActivate: [InitGuard], component: MainPageComponent},
  {path: 'config', component: ConfigPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
