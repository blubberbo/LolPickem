import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickemGameComponent } from './game.component';
import { TeamModule } from '../team/team.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [PickemGameComponent],
  imports: [CommonModule, TeamModule, SharedModule],
  exports: [PickemGameComponent],
})
export class GameModule {}
