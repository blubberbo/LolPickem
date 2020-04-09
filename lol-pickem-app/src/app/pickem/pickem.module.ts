import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PickemComponent } from './pickem.component';
import { PickemGameModule } from './game/game.module';
import { PickemHistoryModule } from './history/history.module';

@NgModule({
  declarations: [PickemComponent],
  imports: [SharedModule, PickemGameModule, PickemHistoryModule],
  exports: [PickemComponent, PickemHistoryModule],
})
export class PickemModule {}
