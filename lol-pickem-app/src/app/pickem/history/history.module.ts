import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickemHistoryComponent } from './history.component';
import { SharedModule } from 'src/app/shared';
import { PickemTeamModule } from '../team/team.module';

@NgModule({
  declarations: [PickemHistoryComponent],
  imports: [CommonModule, SharedModule, PickemTeamModule],
  exports: [PickemHistoryComponent],
})
export class PickemHistoryModule {}
