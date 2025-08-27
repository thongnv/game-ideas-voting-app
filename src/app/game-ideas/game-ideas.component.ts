import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


import { Idea } from '../game-ideas/idea.interface';

@Component({
  selector: 'app-game-ideas',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './game-ideas.component.html',
  styleUrl: './game-ideas.component.scss'
})
export class GameIdeasComponent {
// private ideaSearchService = inject(IdeaSearchService);

  displayedColumns: string[] = ['description', 'upvotes', 'downvotes', 'status'];
  dataSource: Idea[] = [];
  displayIdeas: Idea[] = [];
  searchIdeaInput = '';

  ngOnInit(): void {
    // this.loadIdeas();

    this.dataSource = [
      { id: 1, description: 'Idea 1', upvotes: 10, downvotes: 2, status: "none"  },
      { id: 2, description: 'Idea 2', upvotes: 5, downvotes: 1, status: "upvoted"  },
      { id: 3, description: 'Idea 3', upvotes: 8, downvotes: 3, status: "downvoted"  },
    ];

    this.displayIdeas = this.dataSource.slice();
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
  }

  searchIdeaByDescription(event: any) {
    const input: string = event.target.value?.trim().toLowerCase();
    if (!input) {
      this.displayIdeas = this.dataSource.slice();
      return;
    }
    this.displayIdeas = this.dataSource.filter(idea =>
      idea.description.toLowerCase().includes(input)
    );
  }
}
