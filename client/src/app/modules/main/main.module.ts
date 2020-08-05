import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { environment } from '../../../environments/environment';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  {path: '', component: MainContainerComponent },
];


@NgModule({
  declarations: [MainContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}, {}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ]
})
export class MainModule { }
