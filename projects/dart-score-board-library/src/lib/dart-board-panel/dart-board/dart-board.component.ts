import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';

@Component({
  selector: 'app-dart-board',
  templateUrl: './dart-board.component.html',
  styleUrls: ['./dart-board.component.css']
})
export class DartBoardComponent implements OnInit {

  @Output()
  public scoreEntered = new EventEmitter();

  @Output()
  public scoreReverted = new EventEmitter();

  @Input()
  public throwsDone = 0;

  public clickedId = undefined;

  constructor() { }

  ngOnInit() {
  }

  public score(type: number, field: number, event: MouseEvent) {
    this.clickedId = (event.target as any).id;
    setTimeout(() => {
      this.clickedId = undefined;
    }, 750);
    const scoreObject = new ScoreEntry();
    scoreObject.field = field;
    scoreObject.type = type;
    scoreObject.total = type * field;
    scoreObject.isValid = true;
    this.scoreEntered.emit(scoreObject);
  }

  public revertScore() {
    this.scoreReverted.emit();
  }

  public getFillColor(elementId: string, defaultColor: string) {
    if (!this.clickedId || this.clickedId !== elementId)  {
      return defaultColor;
    }
    return '#0009b7';
  }

}
