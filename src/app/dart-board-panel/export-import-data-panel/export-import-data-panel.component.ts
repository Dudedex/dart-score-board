import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DartGameData} from '../classes/dart-game-data';
import {GameSettings} from '../classes/game-setttings';
import {GameData} from '../classes/game-data';

@Component({
  selector: 'app-export-import-data-panel',
  templateUrl: './export-import-data-panel.component.html',
  styleUrls: ['./export-import-data-panel.component.css']
})
export class ExportImportDataPanelComponent implements OnInit {

  @ViewChild('loadGameButton')
  public importGameButton: ElementRef;

  @Input()
  public dartGameData: DartGameData;

  constructor() { }

  ngOnInit() {
  }

  public saveGame() {
    const a = document.createElement('a');
    let objectString = '{';
    objectString += '"settings":' + JSON.stringify(this.dartGameData.settings) + ',';
    objectString += '"currentPlayerMapKeys": ' + JSON.stringify(this.dartGameData.currentPlayerMapKeys) + ',';
    objectString += '"currentActivePlayer": ' + JSON.stringify(this.dartGameData.currentActivePlayer) + ',';
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
      const data = fileReader.result as any;
      const settings = JSON.parse(data).settings;
      const currentActivePlayer = JSON.parse(data).currentActivePlayer;
      const currentPlayerMapKeys = JSON.parse(data).currentPlayerMapKeys;
      const gameData = new Map<string, GameData>();
      let throwsDone = 0;
      for (const gameDataObject of JSON.parse(data).gameData) {
        const gameEntry = new GameData();
        gameEntry.currentLeg.scores = [];
        for (const score of gameDataObject.value.currentLeg.scores) {
          gameEntry.currentLeg.scores.push(score);
        }
        throwsDone += gameEntry.currentLeg.scores.length;
        gameData.set(gameDataObject.key, gameDataObject.value);
      }
      this.dartGameData.throwsDone = throwsDone;
      this.dartGameData.currentActivePlayer = currentActivePlayer;
      this.dartGameData.currentPlayerMapKeys = currentPlayerMapKeys;
      this.dartGameData.gameData = gameData as Map<string, GameData>;
      this.dartGameData.settings = settings as GameSettings;
    };
    fileReader.readAsText(file.target.files[0]);
  }

}
