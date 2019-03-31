import { Injectable } from '@angular/core';
import {ScoreEntry} from '../classes/score-entry';
import {GameModes} from '../classes/game-modes';
import {ScoreValidator} from '../classes/score-validator';

@Injectable()
export class ScoreService {

  constructor() { }

  public getPendingScores(index: number, scores: ScoreEntry[], requiredScore: number) {
    let total = requiredScore;
    if (index > scores.length - 1) {
      index = scores.length - 1;
    }
    for (let i = 0; i <= index; i++) {
      if (scores[i].isValid) {
        total = total - scores[i].total;
      }
    }
    return total;
  }

  public isScoreValid(allScores: ScoreEntry[], currentScore: ScoreEntry, gameMode: GameModes, requiredScore: number): ScoreValidator {
    let cummulatedScores = this.getPendingScores(allScores.length - 1, allScores, requiredScore);
    cummulatedScores = cummulatedScores - currentScore.total;

    const isFirstValidEntry = this.isFirstValidEntry(allScores);
    if ([GameModes.DOUBLE_IN, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1 && isFirstValidEntry) {
      if (currentScore.type === 2 && cummulatedScores >= 0) {
        if (cummulatedScores >= 0) {
          return ScoreValidator.VALID;
        }
        return ScoreValidator.SET_INVALID;
      }
      return ScoreValidator.SINGLE_INVALID;
    }
    if ([GameModes.TRIPPLE_IN, GameModes.TRIPPLE_IN_AND_OUT].indexOf(gameMode) > -1  && isFirstValidEntry) {
      if (currentScore.type === 3) {
        if (cummulatedScores >= 0) {
          return ScoreValidator.VALID;
        }
        return ScoreValidator.SET_INVALID;
      }
      return ScoreValidator.SINGLE_INVALID;
    }

    if (cummulatedScores >= 3) {
      return ScoreValidator.VALID;
    }

    if (cummulatedScores >= 2 && [GameModes.DOUBLE_OUT, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1) {
      return ScoreValidator.VALID;
    }

    if (cummulatedScores >= 1 && GameModes.FREE_GAME === gameMode) {
      return ScoreValidator.VALID;
    }

    if (cummulatedScores === 0) {
      if ([GameModes.DOUBLE_OUT, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1) {
        if (currentScore.type === 2) {
          return ScoreValidator.VALID;
        }
        return ScoreValidator.SET_INVALID;
      }
      if ([GameModes.TRIPPLE_OUT, GameModes.TRIPPLE_IN_AND_OUT].indexOf(gameMode) > -1) {
        if (currentScore.type === 3) {
          return ScoreValidator.VALID;
        }
        return ScoreValidator.SET_INVALID;
      }
      return ScoreValidator.VALID;
    }

    return ScoreValidator.SET_INVALID;
  }

  public isFirstValidEntry(scores: ScoreEntry[]) {
    return scores.findIndex((s) => s.isValid === true) === -1;
  }
}
