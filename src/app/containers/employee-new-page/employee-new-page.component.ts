import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-new-page',
  template: `
  <h1>New Employee</h1>
  <app-employee-form></app-employee-form>
  `,
  styles: [
    `h1 {
      margin: 20px;
      font-weight: 400;
    }`,
  ]
})
export class EmployeeNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}