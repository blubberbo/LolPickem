import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared';
import { PickemModule } from '../pickem/pickem.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, SharedModule, PickemModule],
})
export class HistoryModule {}
