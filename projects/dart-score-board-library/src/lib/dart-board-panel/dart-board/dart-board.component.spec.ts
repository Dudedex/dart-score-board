import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartBoardComponent } from './dart-board.component';

describe('DartBoardComponent', () => {
  let component: DartBoardComponent;
  let fixture: ComponentFixture<DartBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
