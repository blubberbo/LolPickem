import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule],
  exports: [MatToolbarModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatProgressSpinnerModule]
})
export class AngularMatModule {}
