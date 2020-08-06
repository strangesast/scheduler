import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './services/auth.service';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

const routes: Routes = [
  {path: '', component: AuthPageComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'signin' },
    { path: 'signin',  component: LoginFormComponent },
    { path: 'register',  component: RegisterFormComponent },
  ]},
];

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [ AuthService ],
    };
  }
}
