import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// declare ga as a function to set and sent the events
// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = `Lol Pick'em`;

  constructor(public router: Router) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
}
