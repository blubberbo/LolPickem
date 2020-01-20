import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlayComponent } from './play.component';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [SharedModule, GameModule],
  exports: [PlayComponent]
})
export class PlayModule {}
