import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dart-board',
  templateUrl: './dart-board.component.html',
  styleUrls: ['./dart-board.component.css']
})
export class DartBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public score(type: number, score: number) {
    alert(type + ' ' + score + ' => ' + type * score);
  }

}
