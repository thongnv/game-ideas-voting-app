import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

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

  ideaDescription = new FormControl('');

  submitIdea() {
    console.log('Submitted idea:', this.ideaDescription.value);
  }
}
