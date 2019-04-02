import { TestBed } from '@angular/core/testing';

import { DartScoreBoardLibraryService } from './dart-score-board-library.service';

describe('DartScoreBoardLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DartScoreBoardLibraryService = TestBed.get(DartScoreBoardLibraryService);
    expect(service).toBeTruthy();
  });
});
