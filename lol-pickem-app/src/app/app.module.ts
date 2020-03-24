import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent, FooterComponent, SharedModule } from './shared';

import { HomeModule } from './home/home.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationSnackBarComponent } from './shared/notification-snack-bar.component';
import { AuthInterceptorService } from './auth/auth.interceptor';
import { LolPickemErrorHandler } from './lol-pickem-error.handler';
import { AboutComponent } from './about/about.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { PickemModule } from './pickem/pickem.module';
import { PlayModule } from './play/play.module';
import { RiotGamesDisclaimerComponent } from './riot-games-disclaimer/riot-games-disclaimer.component';
import { GoogleAnalyticsService } from './google-analytics.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationSnackBarComponent,
    AboutComponent,
    ReleaseNotesComponent,
    RiotGamesDisclaimerComponent,
  ],
  entryComponents: [NotificationSnackBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    PickemModule,
    PlayModule,
  ],
  exports: [SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: LolPickemErrorHandler },
    GoogleAnalyticsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
