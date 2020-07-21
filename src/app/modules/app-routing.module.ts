import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from '../containers/auth-page/auth-page.component';
import { EmployeeListPageComponent } from '../containers/employee-list-page/employee-list-page.component';
import { EmployeeNewPageComponent } from '../containers/employee-new-page/employee-new-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: AuthPageComponent},
  {path: 'setup', loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)},
  {path: 'employees', component: EmployeeListPageComponent},
  {path: 'employees/new', component: EmployeeNewPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
