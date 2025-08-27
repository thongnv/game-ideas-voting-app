import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(c => c.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'game-ideas',
    pathMatch: 'full',
  },
  {
    path: 'game-ideas',
    loadComponent: () =>
      import('./game-ideas/game-ideas.component').then(
        (c) => c.GameIdeasComponent
      ),
      canActivate: [authGuard],
  },
  {
    path: 'submit-idea',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./game-idea-submission/game-idea-submission.component').then(
        (c) => c.GameIdeaSubmissionComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'game-ideas',
    pathMatch: 'full',
  },
];
