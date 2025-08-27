import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { GameIdeasService } from '../game-ideas/game-ideas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-idea-submission',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './game-idea-submission.component.html',
  styleUrl: './game-idea-submission.component.scss'
})
export class GameIdeaSubmissionComponent {

  private readonly gameIdeasService = inject(GameIdeasService);
  private readonly router = inject(Router);

  ideaDescription = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, (control) => {
      const value = control.value?.trim();
      return value ? null : { trimmedRequired: true };
    }]
  });

  submitIdea() {
    if (this.ideaDescription.value) {
      this.gameIdeasService.submitIdea(this.ideaDescription.value);
      this.ideaDescription.reset();
      this.router.navigate(['/game-ideas']);
    }

  }
}
