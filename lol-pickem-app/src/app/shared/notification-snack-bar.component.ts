import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification-snack-bar',
  templateUrl: 'notification-snack-bar.component.html',
  styles: [
    `
      .flex {
        justify-content: space-between;
        align-items: center;
      }
      .notification-snack-bar-container > div {
        overflow: hidden;
      }
      span {
        width: 100%;
        display: inline-block;
      }
      span > span {
        padding: 0;
      }
      button {
        padding: 0;
      }
    `,
  ],
})
export class NotificationSnackBarComponent {
  // set the default values
  public action = 'dismiss';
  public interval;
  public message = 'Unknown error...';

  // track the time for the timer
  public timerCount = 0;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar,
    private notificationService: NotificationService,
  ) {
    // load the properties from the data passed in
    // if the data.message is a string -> pass it through
    // else if the data.message is an object and it has the .message property -> pass it through
    // else indicate an unknown error
    this.message =
      typeof data.message === 'string'
        ? data.message
        : typeof data.message === 'object' && data.message.message
        ? data.message.message
        : 'Unknown Error...';
    this.action = data.action ? data.action : 'dismiss';
    // check if the message is for a Code 429 (too many requests)
    if (this.message.includes('Code 429')) {
      // if it was a 429 error, include a timer for 120 seconds
      this.startTimer(120);
    } else if (this.message === 'login_required') {
      // if the message was 'login_required', which probably means it was returned from Auth0, set the proper message
      this.message =
        '401 Unauthorized. Your token has expired or you are not logged in.';
      console.error(
        '401 Unauthorized. Your token has expired or you are not logged in. This message was most likely returned directly from Auth0.',
      );
    }
  }

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
    // indicate on the service that the error is being closed
    this.notificationService.errorBeingDisplayed = false;
    // dismiss the actual snack bar
    this.snackBar._openedSnackBarRef.dismiss();
  }
}
