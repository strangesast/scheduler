import { Observable } from 'rxjs';
import { IEmployee } from '../models';

export const DATA_SERVICE = 'DATA_SERVICE';
export interface DataService {
  getEmployees(): Observable<IEmployee[]>;
}
