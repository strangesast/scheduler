import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../splash/splash.module').then((m) => m.SplashModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('../employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'management',
    loadChildren: () =>
      import('../management/management.module').then((m) => m.ManagementModule),
  },
  {
    path: 'main',
    loadChildren: () => import('../main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'setup',
    loadChildren: () =>
      import('../setup/setup.module').then((m) => m.SetupModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
