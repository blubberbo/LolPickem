import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, SharedModule],
})
export class HistoryModule {}
