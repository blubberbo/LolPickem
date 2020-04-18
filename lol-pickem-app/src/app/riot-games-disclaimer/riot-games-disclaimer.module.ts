import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiotGamesDisclaimerComponent } from './riot-games-disclaimer.component';
import { RiotGamesDisclaimerRoutingModule } from './riot-games-disclaimer-routing.module';

@NgModule({
  declarations: [RiotGamesDisclaimerComponent],
  imports: [CommonModule, RiotGamesDisclaimerRoutingModule],
})
export class RiotGamesDisclaimerModule {}
