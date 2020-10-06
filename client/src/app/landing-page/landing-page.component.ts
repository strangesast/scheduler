import { Component, OnInit } from '@angular/core';
import { animate, style, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  template: `
  <section>
    <header>
      <h1>Placeholder</h1>
      <h4>Scheduling & Time Management</h4>
    </header>
  </section>
  <section>
    <ul class="links">
      <li><a mat-flat-button [routerLink]="['/login']">Log in</a></li>
      <li><a mat-flat-button color="primary" [routerLink]="['/get-started']">Get Started</a></li>
    </ul>
  </section>
  `,
  styleUrls: ['./landing-page.component.scss'],
  // animations: [
  //   trigger('fadeIn', [
  //     transition('void => *', [
  //       style({transform: 'translate(0,-10px', opacity: 0}),
  //       animate(1000, style({transform: 'translate(0,0)', opacity: 1})),
  //     ]),
  //   ]),
  // ],
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
