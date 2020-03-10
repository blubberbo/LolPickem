import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpUrlEncodingCodec } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LolPickemService } from './lol-pickem.service';
import { AngularMatModule } from './angular-mat.module';
import { NotificationService } from './notification.service';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMatModule,
  ],
  declarations: [ErrorComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMatModule,
  ],
  providers: [
    LolPickemService,
    NotificationService,
    ErrorService,
    HttpUrlEncodingCodec,
  ],
})
export class SharedModule {}
