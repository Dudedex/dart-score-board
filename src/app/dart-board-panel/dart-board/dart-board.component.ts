import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';

@Component({
  selector: 'app-dart-board',
  templateUrl: './dart-board.component.html',
  styleUrls: ['./dart-board.component.css']
})
export class DartBoardComponent implements OnInit {

  @Output()
  public scoreEntered = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public score(type: number, field: number) {
    const scoreObject = new ScoreEntry();
    scoreObject.field = field;
    scoreObject.type = type;
    scoreObject.total = type * field;
    this.scoreEntered.emit(scoreObject);
  }

}
