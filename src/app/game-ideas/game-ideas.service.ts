import { Injectable } from '@angular/core';
import { Idea } from './idea.interface';

@Injectable({
  providedIn: 'root'
})
export class GameIdeasService {

  constructor() { }

  getIdeas(): Idea[] {
    const ideas = localStorage.getItem('gameIdeas');
    return ideas ? JSON.parse(ideas) : [];
    // return [
    //   { id: 1, description: 'Idea 1', upvotes: 10, downvotes: 2, status: "none"  },
    //   { id: 2, description: 'Idea 2', upvotes: 5, downvotes: 1, status: "upvoted"  },
    //   { id: 3, description: 'Idea 3', upvotes: 8, downvotes: 3, status: "downvoted"  },
    // ];
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
