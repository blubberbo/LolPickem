import { NgModule } from '@angular/core';
import { PlayComponent } from './play.component';
import { SharedModule } from '../shared/shared.module';
import { PickemModule } from '../pickem/pickem.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [SharedModule, PickemModule],
  exports: [PlayComponent],
})
export class PlayModule {}
