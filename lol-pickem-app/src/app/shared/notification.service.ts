import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  constructor() {}
  private displayErrorSource = new Subject<string>();
  public displayError$ = this.displayErrorSource.asObservable();

  /**
   * display any error message that is caught on the page
   *  @params error: string
   */
  //
  displayCaughtError(error: string) {
    this.displayErrorSource.next(error);
  }
}
