import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickemTeamComponent } from './team.component';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [PickemTeamComponent],
  imports: [CommonModule, PlayerModule],
  exports: [PickemTeamComponent],
})
export class TeamModule {}
