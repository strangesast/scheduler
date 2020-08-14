import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DAYS_OF_WEEK } from '../../../../util';

@Component({
  selector: 'app-calendar',
  template: `
    <p>calendar works!</p>
    <table cdk-table class="table" [dataSource]="dataSource">
      <ng-container *ngFor="let column of displayedColumns" [cdkColumnDef]="column">
        <th cdk-header-cell *cdkHeaderCellDef width="120px"> {{column | titlecase }} </th>
        <td cdk-cell *cdkCellDef="let cell"> {{ cell[column] }}</td>
      </ng-container>
      <tr cdk-header-row *cdkHeaderRowDef="displayedColumns"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns = DAYS_OF_WEEK.map(day => day.toLowerCase());

  constructor() { }

  ngOnInit(): void {
    const data = Array.from(Array(10)).map((_, i) => this.displayedColumns.reduce((acc, day) => ({...acc, [day]: 'value'}), {}));
    this.dataSource.data = data;
    console.log(data);
  }

}
