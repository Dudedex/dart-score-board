import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameSettings} from '../classes/game-setttings';
import {GameModes} from '../classes/game-modes';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-setup-panel',
  templateUrl: './setup-panel.component.html',
  styleUrls: ['./setup-panel.component.css']
})
export class SetupPanelComponent implements OnInit {

  @Input()
  public gameSettings: GameSettings;

  @Output()
  public gameStarted = new EventEmitter();

  public isCustomizedRequiredScore: boolean;
  public requiredScoreModel: number;
  public newPlayerName = '';
  public showGameCancelWarning = false;

  constructor() {
  }

  ngOnInit() {
    this.isCustomizedRequiredScore = false;
    if (this.gameSettings.requiredScore) {
      this.requiredScoreModel = this.gameSettings.requiredScore;
    }
  }

  public getGameModes() {
    const modes = [];
    const allModes = Object.keys(GameModes.valueOf());
    for (const mode of allModes.slice(0, allModes.length / 2)) {
      modes.push(parseInt(mode, 10));
    }

    return modes;
  }

  public getGameModeValue(key: number) {
    return GameModes.valueOf()[key];
  }

  public getConvertedRequiredScore() {
    if (this.isCustomizedRequiredScore) {
      return -1;
    }
    return this.gameSettings.requiredScore;
  }

  public setRequiredScore(score: number) {
    if (this.gameSettings.isGameActive) {
      return;
    }
    this.gameSettings.requiredScore = score;
    this.requiredScoreModel = score;
  }

  public setGameMode(mode: number) {
    if (this.gameSettings.isGameActive) {
      return;
    }
    this.gameSettings.gameMode = mode;
  }

  public doesPlayerExists() {
    return this.gameSettings.players.indexOf(this.newPlayerName.trim()) > -1;
  }

  public addNewPlayer() {
    if (this.gameSettings.isGameActive) {
      return;
    }
    if (this.newPlayerName.trim() !== '' && !this.doesPlayerExists()) {
      this.gameSettings.players.push(this.newPlayerName);
      this.newPlayerName = '';
    }
  }

  public removePlayer(name: string) {
    if (this.gameSettings.isGameActive) {
      return;
    }
    if (name && name.trim() !== '') {
      const index = this.gameSettings.players.indexOf(name);
      if (index > -1) {
        this.gameSettings.players.splice(index, 1);
      }
    }
  }

  public isGameReady() {
    return this.gameSettings &&
      this.gameSettings.requiredScore > 0 &&
      this.gameSettings.players.length > 0 &&
      this.gameSettings.gameMode > -1;
  }

  public startGame() {
    if (this.gameSettings.isGameActive) {
      return;
    }
    if (this.isGameReady()) {
      this.gameStarted.emit();
    }
  }

  public getGameCancelWarningClass() {
    return this.showGameCancelWarning ? 'display-warning' : 'hide-warning';
  }

  public cancelGame() {
    this.showGameCancelWarning = false;
    this.gameSettings.isGameActive = false;
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (this.gameSettings.isGameActive) {
      return;
    }
    moveItemInArray(this.gameSettings.players, event.previousIndex, event.currentIndex);
  }
}
