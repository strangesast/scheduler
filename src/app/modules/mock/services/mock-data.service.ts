import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService implements DataService {
  employees = Array.from(Array(10)).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    categories: [],
  }))

  getEmployees() {
    return of(this.employees);
  }

  constructor() {}
}
