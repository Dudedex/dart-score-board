import {ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DartGameData} from './classes/dart-game-data';
import {GameSettings} from './classes/game-setttings';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from './translation/translation-provider';
import {GameModes} from './classes/game-modes';
import {PlayerData} from './classes/player-data';
import {ScoreEntry} from './classes/score-entry';
import {GamePanelComponent} from './game-panel/game-panel.component';

@Component({
  selector: 'app-dart-board-panel',
  templateUrl: './dart-board-panel.component.html',
  styleUrls: ['./dart-board-panel.component.css']
})
export class DartBoardPanelComponent implements OnInit, OnChanges {

  @ViewChild('gamePanel')
  public gamePanel: GamePanelComponent;

  @Input()
  public locale: string;

  public dartGameData: DartGameData;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.dartGameData = new DartGameData();
    this.dartGameData.settings = new GameSettings();
    this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
    this.dartGameData.settings.requiredScore = 501;
    this.dartGameData.settings.players = [];
    this.dartGameData.currentPlayerMapKeys = [];
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public startNewGame() {
    this.gamePanel.startNewGame();
  }
}
