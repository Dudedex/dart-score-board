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

  constructor() { }

  ngOnInit() {
  }

  public score(type: number, field: number) {
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

}
