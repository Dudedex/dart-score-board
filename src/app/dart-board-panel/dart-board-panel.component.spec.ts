import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DartBoardPanelComponent } from './dart-board-panel.component';

describe('DartBoardPanelComponent', () => {
  let component: DartBoardPanelComponent;
  let fixture: ComponentFixture<DartBoardPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DartBoardPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DartBoardPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
