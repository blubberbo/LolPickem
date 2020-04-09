import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickemTeamComponent } from './team.component';
import { PickemPlayerModule } from '../player/player.module';

@NgModule({
  declarations: [PickemTeamComponent],
  imports: [CommonModule, PickemPlayerModule],
  exports: [PickemTeamComponent],
})
export class PickemTeamModule {}
