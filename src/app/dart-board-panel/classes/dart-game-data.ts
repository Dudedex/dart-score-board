import {GameSettings} from './game-setttings';
import {GameData} from './game-data';

export class DartGameData {
  public settings: GameSettings;
  public gameData: Map<string, GameData>;
}
