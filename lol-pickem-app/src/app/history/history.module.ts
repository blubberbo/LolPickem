import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared';
import { PickemModule } from '../pickem/pickem.module';
import { HistoryRoutingModule } from './history-routing.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, SharedModule, PickemModule, HistoryRoutingModule],
})
export class HistoryModule {}
