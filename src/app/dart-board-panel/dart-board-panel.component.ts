import {ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DartGameData} from './classes/dart-game-data';
import {GameSettings} from './classes/game-setttings';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from './translation/translation-provider';
import {GameModes} from './classes/game-modes';
import {GameData} from './classes/game-data';
import {ScoreEntry} from './classes/score-entry';

@Component({
  selector: 'app-dart-board-panel',
  templateUrl: './dart-board-panel.component.html',
  styleUrls: ['./dart-board-panel.component.css']
})
export class DartBoardPanelComponent implements OnInit, OnChanges {

  @ViewChild('loadGameButton')
  public importGameButton: ElementRef;

  @Input()
  public locale: string;

  public dartGameData: DartGameData;
  public currentActivePlayer: string;
  public currentPlayerMapKeys: string[];

  constructor(private translate: TranslateService, private cdRef: ChangeDetectorRef ) {
  }

  ngOnInit() {
    this.dartGameData = new DartGameData();
    this.dartGameData.settings = new GameSettings();
    this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
    this.dartGameData.settings.requiredScore = 501;
    this.dartGameData.settings.players = [];
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  public startNewGame() {
    this.currentPlayerMapKeys = [];
    const playerMap = new Map<string, GameData>();
    let firstPlayerAssigned = false;
    for (const player of this.dartGameData.settings.players) {
      playerMap.set(player, new GameData());
      if (!firstPlayerAssigned) {
        this.currentActivePlayer = player;
        firstPlayerAssigned = true;
      }
    }
    this.dartGameData.gameData = playerMap;
    this.currentPlayerMapKeys = Array.from(playerMap.keys());
    this.dartGameData.settings.isGameActive = true;
    this.cdRef.detectChanges();
  }

  public scoreEntered(event: ScoreEntry) {
    if (this.dartGameData.gameData && this.currentActivePlayer) {
      const currentData = this.dartGameData.gameData.get(this.currentActivePlayer);
      if (currentData.currentLeg && currentData.currentLeg.scores) {
        currentData.currentLeg.scores.push(event);
        if (currentData.currentLeg.scores.length % 3 === 0) {
          const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.currentActivePlayer);
          if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
            this.currentActivePlayer = this.dartGameData.settings.players[0];
          } else {
            this.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
          }
        }
      }
    }
  }

  public isPlayerActive(player: string) {
    return this.currentActivePlayer === player;
  }

  public saveGame() {
    console.log(this.dartGameData.gameData);
    const a = document.createElement('a');
    let objectString = '{';
    objectString += '"settings":' + JSON.stringify(this.dartGameData.settings) + ',';
    objectString += '"currentPlayerMapKeys": ' + JSON.stringify(this.currentPlayerMapKeys) + ',';
    objectString += '"currentActivePlayer": ' + JSON.stringify(this.currentActivePlayer) + ',';
    objectString += '"gameData": [';
    let isFirst = true;
    for (const key of Array.from(this.dartGameData.gameData.keys())) {
      if (!isFirst) {
        objectString += ',';
      } else {
        isFirst = false;
      }
      const line = JSON.stringify(this.dartGameData.gameData.get(key));
      objectString += '{"key": "' + key + '",';
      objectString += '"value": ' + line + '}';
    }
    objectString += ']}';
    a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(objectString));
    a.setAttribute('download', 'game-data-' + new Date().getTime() + '.json');
    a.click();
  }

  public loadGame() {
    this.importGameButton.nativeElement.click();
  }

  public fileLoaded(file: any) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const result = fileReader.result;
      const data = result as any;
      const settings = JSON.parse(data).settings;
      this.currentActivePlayer = JSON.parse(data).currentActivePlayer;
      this.currentPlayerMapKeys = JSON.parse(data).currentPlayerMapKeys;
      console.log(this.currentPlayerMapKeys);
      const gameData = new Map<string, GameData>();
      this.currentPlayerMapKeys = [];
      for (const gameDataObject of JSON.parse(data).gameData) {
        const gameEntry = new GameData();
        gameEntry.currentLeg.scores = [];
        for (const score of gameDataObject.value.currentLeg.scores) {
          gameEntry.currentLeg.scores.push(score);
        }

        gameData.set(gameDataObject.key, gameEntry);
      }
      this.dartGameData = new DartGameData();
      this.dartGameData.gameData = gameData as Map<string, GameData>;
      this.dartGameData.settings = settings as GameSettings;
      console.log(this.dartGameData.gameData);
    };
    fileReader.readAsText(file.target.files[0]);
  }

}
