import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartScoreBoardLibraryComponent } from './dart-score-board-library.component';

describe('DartScoreBoardLibraryComponent', () => {
  let component: DartScoreBoardLibraryComponent;
  let fixture: ComponentFixture<DartScoreBoardLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartScoreBoardLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartScoreBoardLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
