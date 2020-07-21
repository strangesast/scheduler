import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

/* modules */
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../../environments/environment';

/* components */
import { AppComponent } from '../containers/app.component';
import { AuthPageComponent } from '../containers/auth-page/auth-page.component';
import { EmployeeListPageComponent } from '../containers/employee-list-page/employee-list-page.component';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { EmployeeNewPageComponent } from '../containers/employee-new-page/employee-new-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    EmployeeListPageComponent,
    EmployeeFormComponent,
    EmployeeNewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    environment.dataModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
