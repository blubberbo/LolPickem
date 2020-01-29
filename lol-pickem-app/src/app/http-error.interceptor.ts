import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NotificationService } from './shared/notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        // store the error message
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `${error.error.message}`;
        } else {
          // server-side error
          // check if the error was 429 (too many requests)
          if (error.status === 429) {
            // we got a 429 returned, so send the appropriate message back, with a timer
            errorMessage =
              'Code 429. This means you have called the API too many times. Please wait 2 minutes and then try again.';
          } else {
            // else, process the error normally
            errorMessage = `${error.status}\nMessage: ${error.message}`;
          }
        }
        // Regardless of whether we are in prod or dev, display the error
        this.notificationService.displayCaughtError(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
