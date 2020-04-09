import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  // a local flag to keep track of whether or not an error is being shown
  public errorBeingDisplayed = false;
  // the subject to display the error
  private displayErrorSource = new Subject<string>();
  // the observable used to display the error
  public displayError$ = this.displayErrorSource.asObservable();
  constructor() {}
  /**
   * display any error message that is caught on the page
   *  @params error: string
   */
  //
  displayCaughtError(error: string) {
    // only if there is no error being displayed currently
    if (!this.errorBeingDisplayed) {
      // indicate an error is being displayed
      this.errorBeingDisplayed = true;
      // call the .next() method on the source to push the next error to the snack bar
      this.displayErrorSource.next(error);
    }
  }
}
