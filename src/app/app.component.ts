import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameIdeasComponent } from './game-ideas/game-ideas.component';
import { GameIdeaSubmissionComponent } from './game-idea-submission/game-idea-submission.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameIdeaSubmissionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ideas-voting';
}
