import {Component, Input, OnInit} from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';
import {DartGameData} from '../classes/dart-game-data';
import {GameData} from '../classes/game-data';
import {ScoreService} from '../services/score.service';
import {GameModes} from '../classes/game-modes';
import {ScoreValidator} from '../classes/score-validator';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  @Input()
  public dartGameData: DartGameData;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
  }

  public scoreEntered(event: ScoreEntry) {
    if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
      const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
      if (currentData.currentLeg && currentData.currentLeg.scores) {
        const scoreValid = this.scoreService.isScoreValid(currentData.currentLeg.scores, event, this.dartGameData.settings.gameMode as GameModes , this.dartGameData.settings.requiredScore);
        event.isValid = scoreValid === ScoreValidator.VALID;
        currentData.currentLeg.scores.push(event);
        if (scoreValid === ScoreValidator.SET_INVALID) {
          let numberOfThrowsDone = currentData.currentLeg.scores.length % 3;
          if (numberOfThrowsDone === 0) {
            numberOfThrowsDone = 3;
          }
          for (let i = currentData.currentLeg.scores.length - 1; i >= currentData.currentLeg.scores.length - numberOfThrowsDone ; i--) {
              console.log('invalidate ' + JSON.stringify(currentData.currentLeg.scores[i]));
              currentData.currentLeg.scores[i].isValid = false;
          }

          const scoreEntryCount = 3 - numberOfThrowsDone;
          console.log(scoreEntryCount);
          for (let i = 0; i < scoreEntryCount; i++) {
            console.log('adding dummy ');
            const dummyScore = new ScoreEntry();
            dummyScore.isValid = false;
            dummyScore.type = 0;
            dummyScore.total = 0;
            dummyScore.field = 0;
            currentData.currentLeg.scores.push(dummyScore);
          }
        }
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

  public getPlayerObject() {
    const dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
    return {'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount};
  }
}
