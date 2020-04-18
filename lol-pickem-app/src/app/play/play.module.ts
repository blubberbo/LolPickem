import { NgModule } from '@angular/core';
import { PlayComponent } from './play.component';
import { SharedModule } from '../shared/shared.module';
import { PickemModule } from '../pickem/pickem.module';
import { PlayRoutingModule } from './play-routing.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [SharedModule, PickemModule, PlayRoutingModule],
  exports: [PlayComponent],
})
export class PlayModule {}
