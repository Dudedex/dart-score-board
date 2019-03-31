import {Component, Input, OnInit} from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';
import {DartGameData} from '../classes/dart-game-data';
import {GameData} from '../classes/game-data';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  @Input()
  public dartGameData: DartGameData;

  constructor() {
  }

  ngOnInit() {
  }

  public scoreEntered(event: ScoreEntry) {
    if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
      const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
      if (currentData.currentLeg && currentData.currentLeg.scores) {
        currentData.currentLeg.scores.push(event);
        if (currentData.currentLeg.scores.length % 3 === 0) {
          const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
          if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[0];
          } else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
          }
        }
      }
    }
  }

  public startNewGame() {
    this.dartGameData.currentPlayerMapKeys = [];
    const playerMap = new Map<string, GameData>();
    let firstPlayerAssigned = false;
    for (const player of this.dartGameData.settings.players) {
      playerMap.set(player, new GameData());
      if (!firstPlayerAssigned) {
        this.dartGameData.currentActivePlayer = player;
        firstPlayerAssigned = true;
      }
    }
    this.dartGameData.gameData = playerMap;
    this.dartGameData.currentPlayerMapKeys = Array.from(playerMap.keys());
    this.dartGameData.settings.isGameActive = true;
  }

  public isPlayerActive(player: string) {
    return this.dartGameData.currentActivePlayer === player;
  }

  public getPlayerObject(){
    const dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
    return {'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount};
  }
}
