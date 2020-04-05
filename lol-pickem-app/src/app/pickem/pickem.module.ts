import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PickemComponent } from './pickem.component';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [PickemComponent],
  imports: [SharedModule, GameModule],
  exports: [PickemComponent],
})
export class PickemModule {}
