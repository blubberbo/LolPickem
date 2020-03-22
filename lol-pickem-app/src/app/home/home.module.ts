import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PickemModule } from '../pickem/pickem.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, PickemModule],
})
export class HomeModule {}
