import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PlayComponent } from '../play/play.component';

@NgModule({
  declarations: [HomeComponent, PlayComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
