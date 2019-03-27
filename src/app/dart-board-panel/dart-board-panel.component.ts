import {Component, Input, OnInit} from '@angular/core';
import {DartGameData} from './classes/dart-game-data';
import {GameSettings} from './classes/game-setttings';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from './translation/translation-provider';
import {GameModes} from './classes/game-modes';

@Component({
  selector: 'app-dart-board-panel',
  templateUrl: './dart-board-panel.component.html',
  styleUrls: ['./dart-board-panel.component.css']
})
export class DartBoardPanelComponent implements OnInit {

  @Input()
  public locale: string;

  public dartGameData: DartGameData;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.dartGameData = new DartGameData();
    this.dartGameData.settings = new GameSettings();
    console.log(GameModes.FREE_GAME);
    this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
    this.dartGameData.settings.requiredScore = 501;
    this.dartGameData.settings.players = [];
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

}
