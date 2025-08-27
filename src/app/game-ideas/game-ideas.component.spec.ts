import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIdeasComponent } from './game-ideas.component';

describe('GameIdeasComponent', () => {
  let component: GameIdeasComponent;
  let fixture: ComponentFixture<GameIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
