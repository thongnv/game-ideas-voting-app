import { Injectable } from '@angular/core';
import { Idea } from './idea.interface';

@Injectable({
  providedIn: 'root'
})
export class GameIdeasService {

  constructor() { }

  getIdeas(): Idea[] {
    const ideas = localStorage.getItem('gameIdeas');
    return ideas ? JSON.parse(ideas) : 
    [
      { id: 1, description: 'this is an awesome idea', upvotes: 10, downvotes: 2, status: "none"  },
      { id: 2, description: 'my idea for the racing game', upvotes: 5, downvotes: 1, status: "none"  },
      { id: 3, description: 'I have an idea of building a console game for elders', upvotes: 8, downvotes: 3, status: "none"  }
    ];
  }

  setIdeas(ideas: Idea[]) {
    localStorage.setItem('gameIdeas', JSON.stringify(ideas));
  }

  submitIdea(description: string) { 
    const ideas = this.getIdeas();
    const newIdea: Idea = {
      id: ideas.length + 1,
      description,
      upvotes: 0,
      downvotes: 0,
      status: 'none'
    };
    ideas.push(newIdea);
    this.setIdeas(ideas);
  }
}
