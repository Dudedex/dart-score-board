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

  constructor() { }

  ngOnInit() {
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
}
