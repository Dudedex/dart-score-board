import { Component, OnInit } from '@angular/core';
import {DartGameData} from './classes/dart-game-data';
import {GameSettings} from './classes/game-setttings';

@Component({
  selector: 'app-dart-board-panel',
  templateUrl: './dart-board-panel.component.html',
  styleUrls: ['./dart-board-panel.component.css']
})
export class DartBoardPanelComponent implements OnInit {

  public dartGameData: DartGameData;


  constructor() { }

  ngOnInit() {
    this.dartGameData = new DartGameData();
    this.dartGameData.settings = new GameSettings();
  }

}
