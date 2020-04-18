import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiotGamesDisclaimerComponent } from './riot-games-disclaimer.component';

const routes: Routes = [
  {
    path: '',
    component: RiotGamesDisclaimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiotGamesDisclaimerRoutingModule {}
