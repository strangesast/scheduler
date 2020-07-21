import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpDataService implements DataService {
  getEmployees() {
    return of([]);
  }

  constructor() {}
}
