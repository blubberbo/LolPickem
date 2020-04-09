import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared';
import { UserHistoryRecapComponent } from '../shared/user-history-recap/user-history-recap.component';

@NgModule({
  declarations: [HistoryComponent, UserHistoryRecapComponent],
  imports: [CommonModule, SharedModule],
})
export class HistoryModule {}
