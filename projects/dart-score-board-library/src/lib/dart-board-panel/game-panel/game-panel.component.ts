import {Component, Input, OnInit} from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';
import {DartGameData} from '../classes/dart-game-data';
import {PlayerData} from '../classes/player-data';
import {ScoreService} from '../services/score.service';
import {GameModes} from '../classes/game-modes';
import {ScoreValidator} from '../classes/score-validator';
import {unescape} from 'querystring';

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
    if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer && !this.dartGameData.legFinished) {
      const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
      if (currentData.currentLeg && currentData.currentLeg.scores) {
        const scoreValid = this.scoreService.isScoreValid(currentData.currentLeg.scores, event, this.dartGameData.settings.gameMode as GameModes, this.dartGameData.settings.requiredScore);
        event.isValid = scoreValid === ScoreValidator.VALID;
        currentData.currentLeg.scores.push(event);
        if (scoreValid === ScoreValidator.SET_INVALID) {
          this.invalidateSet(scoreValid, currentData);
        }
        if (this.scoreService.getPendingScores(currentData.currentLeg.scores.length - 1, currentData.currentLeg.scores, this.dartGameData.settings.requiredScore) === 0) {
          currentData.currentLeg.finishedTime = new Date().getTime();
          currentData.currentLeg.totalThrowNumberInLeg = this.dartGameData.throwsDone;
          this.selectNextPlayer();
        } else {
          if (currentData.currentLeg.scores.length % 3 === 0) {
            this.selectNextPlayer();
          }
        }
        this.dartGameData.throwsDone += 1;
      }
    }
  }

  public scoreReverted() {
    if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
      console.log('start revert');
      let currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
      console.log('currentData');
      console.log(currentData);
      if (currentData.currentLeg && currentData.currentLeg.scores) {
        const throwsLeftCount = 3 - currentData.currentLeg.scores.length % 3;
        if (throwsLeftCount === 3) {
          this.selectPreviousNotFinishedPlayer();
        }
        this.checkIfFinished(1);
        currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
        let toDeletedRows = 0;
        for (let i = currentData.currentLeg.scores.length - 1; i >= 0; i--) {
          const score = currentData.currentLeg.scores[i];
          toDeletedRows += 1;
          if (score.type !== 0) {
            break;
          }
        }
        currentData.currentLeg.scores.splice(currentData.currentLeg.scores.length - toDeletedRows, toDeletedRows);

        this.dartGameData.throwsDone -= 1;
      }
    }
  }

  public startNewGame() {
    this.dartGameData.currentPlayerMapKeys = [];
    const playerMap = new Map<string, PlayerData>();
    let firstPlayerAssigned = false;
    for (const player of this.dartGameData.settings.players) {
      playerMap.set(player, new PlayerData());
      if (!firstPlayerAssigned) {
        this.dartGameData.currentActivePlayer = player;
        firstPlayerAssigned = true;
      }
    }
    this.dartGameData.throwsDone = 0;
    this.dartGameData.gameData = playerMap;
    this.dartGameData.legFinished = false;
    this.dartGameData.currentPlayerMapKeys = Array.from(playerMap.keys());
    this.dartGameData.settings.isGameActive = true;
  }

  public isPlayerActive(player: string) {
    if (this.dartGameData.legFinished) {
      return false;
    }
    return this.dartGameData.currentActivePlayer === player;
  }

  public getPlayerObject() {
    const dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
    return {'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount};
  }

  public getFirstFinisher() {
    const finisherArray = [];
    for (const player of this.dartGameData.currentPlayerMapKeys) {
      const currentData = this.dartGameData.gameData.get(player);
      if (currentData.currentLeg.finishedTime) {
        finisherArray.push({'player': player, 'finishTime': currentData.currentLeg.finishedTime});
      }
    }
    if (finisherArray.length === 0) {
      return undefined;
    }
    let firstFinisher = finisherArray[0];
    for (const finisher of finisherArray) {
      if (finisher.finishTime < firstFinisher.finishTime) {
        firstFinisher = finisher;
      }
    }
    return firstFinisher.player;
  }

  private invalidateSet(scoreValid: ScoreValidator, currentData: PlayerData | undefined) {
    let numberOfThrowsDone = currentData.currentLeg.scores.length % 3;
    if (numberOfThrowsDone === 0) {
      numberOfThrowsDone = 3;
    }
    for (let i = currentData.currentLeg.scores.length - 1; i >= currentData.currentLeg.scores.length - numberOfThrowsDone; i--) {
      currentData.currentLeg.scores[i].isValid = false;
    }

    const throwsLeftCount = 3 - numberOfThrowsDone;
    for (let i = 0; i < throwsLeftCount; i++) {
      const dummyScore = new ScoreEntry();
      dummyScore.isValid = false;
      dummyScore.type = 0;
      dummyScore.total = 0;
      dummyScore.field = 0;
      currentData.currentLeg.scores.push(dummyScore);
    }
  }

  private selectPreviousNotFinishedPlayer(iteration?: number) {
    if (!iteration) {
      iteration = 1;
    } else {
      iteration += 1;
    }
    const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
    if (indexOfActivePlayer === 0) {
      this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[this.dartGameData.settings.players.length - 1];
    } else {
      this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer - 1];
    }
    this.checkIfFinished(iteration);
  }

  private checkIfFinished(iteration: number) {
    const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
    if (currentData.currentLeg.finishedTime) {
      if (this.dartGameData.throwsDone - 1 === currentData.currentLeg.totalThrowNumberInLeg) {
        currentData.currentLeg.finishedTime = undefined;
        currentData.currentLeg.totalThrowNumberInLeg = undefined;
        this.dartGameData.legFinished = false;
        this.dartGameData.settings.isGameActive = true;
      } else {
        if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
          this.selectPreviousNotFinishedPlayer(iteration);
        }
      }
    }
  }

  private selectNextPlayer(iteration?: number) {
    if (!iteration) {
      iteration = 1;
    } else {
      iteration += 1;
    }
    const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
    if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
      this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[0];
    } else {
      this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
    }
    const newPlayerScores = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores;
    if (this.scoreService.getPendingScores(newPlayerScores.length - 1, newPlayerScores, this.dartGameData.settings.requiredScore) === 0) {
      console.log(iteration);
      if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
        this.selectNextPlayer(iteration);
      } else {
        this.dartGameData.legFinished = true;
        this.dartGameData.settings.isGameActive = false;
      }
    }
  }

}
