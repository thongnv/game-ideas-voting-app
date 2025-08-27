import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'game-ideas',
        pathMatch: 'full'
    },
    {
        path: 'game-ideas',
        loadComponent: () => import('./game-ideas/game-ideas.component').then(c => c.GameIdeasComponent)
    },
    {
        path: 'submit-idea',
        loadComponent: () => import('./game-idea-submission/game-idea-submission.component').then(c => c.GameIdeaSubmissionComponent)
    }

];
