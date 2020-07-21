import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DATA_SERVICE } from '../../services/data.service';
import { HttpDataService } from './services/http-data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DATA_SERVICE, useClass: HttpDataService },
  ],
})
export class DataModule { }
