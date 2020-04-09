import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickemGameComponent } from './game.component';
import { PickemTeamModule } from '../team/team.module';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [PickemGameComponent],
  imports: [CommonModule, PickemTeamModule, SharedModule],
  exports: [PickemGameComponent],
})
export class PickemGameModule {}
