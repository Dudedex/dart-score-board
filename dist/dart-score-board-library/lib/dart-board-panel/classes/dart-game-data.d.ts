import { GameSettings } from './game-setttings';
import { PlayerData } from './player-data';
export declare class DartGameData {
    settings: GameSettings;
    gameData: Map<string, PlayerData>;
    currentActivePlayer: string;
    currentPlayerMapKeys: string[];
    throwsDone: number;
    legFinished: boolean;
}
