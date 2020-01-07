import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlayComponent } from './play.component';


@NgModule({
  declarations: [PlayComponent],
  imports: [
    SharedModule
  ]
})
export class PlayModule { }
