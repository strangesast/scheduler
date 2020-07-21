import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DATA_SERVICE, DataService } from '../../services/data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list-page',
  template: `
    <h1>Employees</h1>
    <mat-table [dataSource]="dataSource" class="mat-elevation-z2">
      <ng-container matColumnDef="firstName">
        <mat-header-cell *matHeaderCellDef> First Name </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{ element.firstName }} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="lastName">
        <mat-header-cell *matHeaderCellDef> Last Name </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{ element.lastName }} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="categories">
        <mat-header-cell *matHeaderCellDef> Categories </mat-header-cell>
        <mat-cell *matCellDef="let element">
          {{ element.categories }}
        </mat-cell>
      </ng-container>

      <mat-header-row
        *matHeaderRowDef="displayedColumns; sticky: true"
      ></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
    </mat-table>
    <div class="controls">
      <a [routerLink]="['/employees', 'new']" mat-flat-button color="primary"
        ><mat-icon>add</mat-icon> Create New</a
      >
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        color: #505050;
      }
      h1 {
        margin-left: 12px;
      }
      mat-table {
        margin: 0 12px;
      }
      .controls {
        margin: 20px 12px;
      }
      h1 {
        font-weight: 400;
      }
    `,
  ],
})
export class EmployeeListPageComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource();
  destroyed$ = new Subject();

  displayedColumns = ['firstName', 'lastName', 'categories'];

  constructor(@Inject(DATA_SERVICE) public dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getEmployees()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => (this.dataSource.data = data));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
