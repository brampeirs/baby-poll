import { Routes } from '@angular/router';
import { OverviewComponent } from './containers/overview/overview.component';
import { PollComponent } from './containers/poll/poll.component';

export const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'poll',
    loadComponent: () =>
      import('./containers/poll/poll.component').then(
        (mod) => mod.PollComponent
      ),
  },
];
