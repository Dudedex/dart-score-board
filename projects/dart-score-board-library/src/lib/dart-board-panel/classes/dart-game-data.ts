import {GameSettings} from './game-setttings';
import {PlayerData} from './player-data';

export class DartGameData {
  public settings: GameSettings;
  public gameData: Map<string, PlayerData>;
  public currentActivePlayer: string;
  public currentPlayerMapKeys: string[];
  public throwsDone: number;
  public legFinished: boolean;
}
