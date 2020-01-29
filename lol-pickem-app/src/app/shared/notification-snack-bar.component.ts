import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notification-snack-bar',
  templateUrl: 'notification-snack-bar.component.html',
  styles: [
    `
      .flex {
        justify-content: space-between;
        align-items: center;
      }
      span {
        padding: 0 10px;
        display: inline-block;
      }
      span > span {
        padding: 0;
      }
      button {
        padding: 0;
      }
    `
  ]
})
export class NotificationSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, public snackBar: MatSnackBar) {
    // load the properties from the data passed in
    this.message = data.message ? data.message : this.message;
    this.action = data.action ? data.action : this.action;
    // check if the message is for a Code 429 (too many requests)
    if (this.message.includes('Code 429')) {
      // if it was a 429 error, include a timer for 120 seconds
      this.startTimer(120);
    }
  }
  // set the default values
  message = 'Unknown error...';
  action = 'dismiss';
  // track the time for the timer
  timerCount = 0;
  interval;

  /**
   * start a timer for the given amount of seconds
   * @param timerDuration: number
   */
  startTimer(timerDuration: number) {
    this.timerCount = timerDuration;
    this.interval = setInterval(() => {
      if (this.timerCount > 0) {
        this.timerCount--;
      } else {
        this.timerCount = 60;
      }
    }, 1000);
  }

  // close the snack bar
  dismiss(): void {
    this.snackBar._openedSnackBarRef.dismiss();
  }
}
