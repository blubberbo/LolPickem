import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PlayModule } from '../play/play.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, PlayModule]
})
export class HomeModule {}
