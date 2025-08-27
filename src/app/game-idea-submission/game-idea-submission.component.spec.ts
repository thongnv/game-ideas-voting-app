import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIdeaSubmissionComponent } from './game-idea-submission.component';

describe('GameIdeaSubmissionComponent', () => {
  let component: GameIdeaSubmissionComponent;
  let fixture: ComponentFixture<GameIdeaSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameIdeaSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameIdeaSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
