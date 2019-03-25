import {Component, Input, OnInit} from '@angular/core';
import {GameSettings} from '../classes/game-setttings';
import {GameModes} from '../classes/game-modes';

@Component({
  selector: 'app-setup-panel',
  templateUrl: './setup-panel.component.html',
  styleUrls: ['./setup-panel.component.css']
})
export class SetupPanelComponent implements OnInit {

  @Input()
  public gameSettings: GameSettings;

  public isCustomizedRequiredScore: boolean;
  public isCustomizedRequiredLegs: boolean;
  public isCustomizedRequiredSets: boolean;

  constructor() { }

  ngOnInit() {
    this.isCustomizedRequiredScore = false;
    this.isCustomizedRequiredLegs = false;
    this.isCustomizedRequiredSets = false;
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
    this.gameSettings.requiredScore = score;
  }

  public getConvertedRequiredSets() {
    if (this.isCustomizedRequiredSets) {
      return -1;
    }
    return this.gameSettings.requiredSets;
  }

  public setRequiredSets(sets: number) {
    this.gameSettings.requiredSets = sets;
  }

  public getConvertedRequiredLegs() {
    if (this.isCustomizedRequiredLegs) {
      return -1;
    }
    return this.gameSettings.requiredLegs;
  }

  public setRequiredLegs(legs: number) {
    this.gameSettings.requiredLegs = legs;
  }
}
