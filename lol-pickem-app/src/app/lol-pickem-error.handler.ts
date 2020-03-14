import { NotificationService } from './shared/notification.service';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class LolPickemErrorHandler implements ErrorHandler {
  constructor(
    private notificationService: NotificationService = new NotificationService(),
  ) {}
  handleError(error) {
    this.notificationService.displayCaughtError(error.error);
  }
}
