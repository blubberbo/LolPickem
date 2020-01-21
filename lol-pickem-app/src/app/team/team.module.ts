import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { PlayerModule } from '../player/player.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, PlayerModule],
  exports: [TeamComponent]
})
export class TeamModule {}
