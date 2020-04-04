import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { AboutComponent } from './about/about.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';
import { PlayComponent } from './play/play.component';
import { RiotGamesDisclaimerComponent } from './riot-games-disclaimer/riot-games-disclaimer.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
  {
    path: 'release-notes',
    component: ReleaseNotesComponent,
  },
  {
    path: 'riot-games-disclaimer',
    component: RiotGamesDisclaimerComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  { path: '**', component: ErrorComponent, data: { statusCode: 404 } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
