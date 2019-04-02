import { ScoreEntry } from '../classes/score-entry';
import { GameModes } from '../classes/game-modes';
import { ScoreValidator } from '../classes/score-validator';
export declare class ScoreService {
    constructor();
    getPendingScores(index: number, scores: ScoreEntry[], requiredScore: number): number;
    isScoreValid(allScores: ScoreEntry[], currentScore: ScoreEntry, gameMode: GameModes, requiredScore: number): ScoreValidator;
    isFirstValidEntry(scores: ScoreEntry[]): boolean;
}
