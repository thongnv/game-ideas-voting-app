import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { Idea } from '../game-ideas/idea.interface';
import { RouterModule } from '@angular/router';
import { GameIdeasService } from './game-ideas.service';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-game-ideas',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
  ],
  templateUrl: './game-ideas.component.html',
  styleUrl: './game-ideas.component.scss',
})
export class GameIdeasComponent {
  private gameIdeasService = inject(GameIdeasService);

  displayedColumns: string[] = [
    'description',
    'upvotes',
    'downvotes',
    'status',
  ];
  dataSource: Idea[] = [];
  searchIdeaInput = new FormControl('');
  sortTableDataSource = new MatTableDataSource<Idea>();

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.sortTableDataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = this.gameIdeasService.getIdeas();
    const displayIdeas = this.dataSource.slice();
    this.sortTableDataSource = new MatTableDataSource(displayIdeas);

    this.searchIdeaInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((value) => !value || value.length >= 2)
      )
      .subscribe((value) => {
        const input: string = value?.trim().toLowerCase() ?? '';
        this.searchIdeaByDescription(input);
      });
  }

  upvote(idea: Idea) {
    if (idea.status === 'none') {
      idea.upvotes += 1;
      idea.status = 'upvoted';
    } else if (idea.status === 'upvoted') {
      idea.upvotes -= 1;
      idea.status = 'none';
    } else {
      // downvoted
      idea.downvotes -= 1;
      idea.upvotes += 1;
      idea.status = 'upvoted';
    }
    this.saveIdea(idea);
  }

  downvote(idea: Idea) {
    if (idea.status === 'none') {
      idea.downvotes += 1;
      idea.status = 'downvoted';
    } else if (idea.status === 'downvoted') {
      idea.downvotes -= 1;
      idea.status = 'none';
    } else {
      // upvoted
      idea.upvotes -= 1;
      idea.downvotes += 1;
      idea.status = 'downvoted';
    }
    this.saveIdea(idea);
  }

  private saveIdea(idea: Idea) {
    const index = this.dataSource.findIndex((i) => i.id === idea.id);
    if (index !== -1) {
      this.dataSource[index] = idea;
      this.gameIdeasService.setIdeas(this.dataSource);
    }
  }

  private searchIdeaByDescription(input: string) {
    if (!input) {
      this.sortTableDataSource = new MatTableDataSource(this.dataSource);
      return;
    }
    const displayIdeas = this.dataSource.filter((idea) =>
      idea.description.toLowerCase().includes(input)
    );
    this.sortTableDataSource = new MatTableDataSource(displayIdeas);
  }
}
