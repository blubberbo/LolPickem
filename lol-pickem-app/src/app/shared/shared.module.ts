import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ErrorService } from './error/error.service';
import { LolPickemService } from './lol-pickem.service';
import { AngularMatModule } from './angular-mat.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMatModule
  ],
  declarations: [ErrorComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMatModule
  ],
  providers: [ErrorService, LolPickemService]
})
export class SharedModule { }
