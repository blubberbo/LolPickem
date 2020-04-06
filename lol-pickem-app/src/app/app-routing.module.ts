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
    data: {
      title: {
        text: 'Home',
      },
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: {
        text: 'About',
      },
    },
  },
  {
    path: 'play',
    component: PlayComponent,
    data: {
      title: {
        text: 'Play',
      },
    },
  },
  {
    path: 'release-notes',
    component: ReleaseNotesComponent,
    data: {
      title: {
        text: 'Release Notes',
      },
    },
  },
  {
    path: 'riot-games-disclaimer',
    component: RiotGamesDisclaimerComponent,
    data: {
      title: {
        text: 'Riot Games Disclaimer',
      },
    },
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: {
      title: {
        text: 'History',
      },
    },
  },
  {
    path: '**',
    component: ErrorComponent,
    data: { statusCode: 404, title: { text: 'Error' } },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
