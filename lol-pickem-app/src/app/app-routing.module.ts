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
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {
      title: {
        text: 'About',
      },
    },
  },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then((m) => m.PlayModule),
    data: {
      title: {
        text: 'Play',
      },
    },
  },
  {
    path: 'release-notes',
    loadChildren: () =>
      import('./release-notes/release-notes.module').then(
        (m) => m.ReleaseNotesModule,
      ),
    data: {
      title: {
        text: 'Release Notes',
      },
    },
  },
  {
    path: 'riot-games-disclaimer',
    loadChildren: () =>
      import('./riot-games-disclaimer/riot-games-disclaimer.module').then(
        (m) => m.RiotGamesDisclaimerModule,
      ),
    data: {
      title: {
        text: 'Riot Games Disclaimer',
      },
    },
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
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
