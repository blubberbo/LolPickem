import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { TeamModule } from '../team/team.module';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, TeamModule, SharedModule],
  exports: [GameComponent]
})
export class GameModule {}
