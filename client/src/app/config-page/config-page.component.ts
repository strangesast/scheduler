import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-page',
  template: `
  <app-config-container></app-config-container>
  `,
  styleUrls: ['./config-page.component.scss'],
})
export class ConfigPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
