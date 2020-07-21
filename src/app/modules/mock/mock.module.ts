import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_SERVICE } from '../../services/data.service';
import { MockDataService } from './services/mock-data.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: DATA_SERVICE, useClass: MockDataService}
  ],
})
export class MockModule { }
