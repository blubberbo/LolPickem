import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent, FooterComponent, SharedModule } from './shared';

import { HomeModule } from './home/home.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationSnackBarComponent } from './shared/notification-snack-bar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NotificationSnackBarComponent],
  entryComponents: [NotificationSnackBarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, HomeModule],
  exports: [SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
