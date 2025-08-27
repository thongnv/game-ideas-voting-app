import { TestBed } from '@angular/core/testing';

import { GameIdeasService } from './game-ideas.service';

describe('GameIdeasService', () => {
  let service: GameIdeasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameIdeasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
