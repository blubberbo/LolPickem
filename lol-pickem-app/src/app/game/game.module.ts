import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { TeamModule } from '../team/team.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, TeamModule],
  exports: [GameComponent]
})
export class GameModule {}
