import { Injectable } from '@angular/core';

// tslint:disable-next-line: ban-types
declare let ga: Function; // Declare ga as a function

@Injectable()
export class GoogleAnalyticsService {
  constructor() {}

  // create our event emitter to send our data to Google Analytics
  public eventEmitter(
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null,
  ) {
    ga('send', 'event', {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue,
    });
  }
}
