import { NotificationService } from './shared/notification.service';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class LolPickemErrorHandler implements ErrorHandler {
  constructor(private notificationService: NotificationService) {}
  handleError(error) {
    this.notificationService.displayCaughtError(error.message);
    console.error(error);
  }
}
