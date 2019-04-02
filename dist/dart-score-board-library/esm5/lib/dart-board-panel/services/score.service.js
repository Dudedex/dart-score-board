/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GameModes } from '../classes/game-modes';
import { ScoreValidator } from '../classes/score-validator';
var ScoreService = /** @class */ (function () {
    function ScoreService() {
    }
    /**
     * @param {?} index
     * @param {?} scores
     * @param {?} requiredScore
     * @return {?}
     */
    ScoreService.prototype.getPendingScores = /**
     * @param {?} index
     * @param {?} scores
     * @param {?} requiredScore
     * @return {?}
     */
    function (index, scores, requiredScore) {
        /** @type {?} */
        var total = requiredScore;
        if (index > scores.length - 1) {
            index = scores.length - 1;
        }
        for (var i = 0; i <= index; i++) {
            if (scores[i].isValid) {
                total = total - scores[i].total;
            }
        }
        return total;
    };
    /**
     * @param {?} allScores
     * @param {?} currentScore
     * @param {?} gameMode
     * @param {?} requiredScore
     * @return {?}
     */
    ScoreService.prototype.isScoreValid = /**
     * @param {?} allScores
     * @param {?} currentScore
     * @param {?} gameMode
     * @param {?} requiredScore
     * @return {?}
     */
    function (allScores, currentScore, gameMode, requiredScore) {
        /** @type {?} */
        var cummulatedScores = this.getPendingScores(allScores.length - 1, allScores, requiredScore);
        cummulatedScores = cummulatedScores - currentScore.total;
        /** @type {?} */
        var isFirstValidEntry = this.isFirstValidEntry(allScores);
        if ([GameModes.DOUBLE_IN, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1 && isFirstValidEntry) {
            if (currentScore.type === 2 && cummulatedScores >= 0) {
                if (cummulatedScores >= 0) {
                    return ScoreValidator.VALID;
                }
                return ScoreValidator.SET_INVALID;
            }
            return ScoreValidator.SINGLE_INVALID;
        }
        if ([GameModes.TRIPPLE_IN, GameModes.TRIPPLE_IN_AND_OUT].indexOf(gameMode) > -1 && isFirstValidEntry) {
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
        if (cummulatedScores >= 1 && [GameModes.DOUBLE_IN, GameModes.TRIPPLE_IN, GameModes.FREE_GAME].indexOf(gameMode) > -1) {
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
    };
    /**
     * @param {?} scores
     * @return {?}
     */
    ScoreService.prototype.isFirstValidEntry = /**
     * @param {?} scores
     * @return {?}
     */
    function (scores) {
        return scores.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.isValid === true; })) === -1;
    };
    ScoreService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ScoreService.ctorParameters = function () { return []; };
    return ScoreService;
}());
export { ScoreService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LWJvYXJkLXBhbmVsL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQUdFO0lBQWdCLENBQUM7Ozs7Ozs7SUFFVix1Q0FBZ0I7Ozs7OztJQUF2QixVQUF3QixLQUFhLEVBQUUsTUFBb0IsRUFBRSxhQUFxQjs7WUFDNUUsS0FBSyxHQUFHLGFBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNqQztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVNLG1DQUFZOzs7Ozs7O0lBQW5CLFVBQW9CLFNBQXVCLEVBQUUsWUFBd0IsRUFBRSxRQUFtQixFQUFFLGFBQXFCOztZQUMzRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQztRQUM1Rixn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Q0FBa0IsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7O2dCQTNFRixVQUFVOzs7O0lBNEVYLG1CQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0EzRVksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NvcmVFbnRyeX0gZnJvbSAnLi4vY2xhc3Nlcy9zY29yZS1lbnRyeSc7XG5pbXBvcnQge0dhbWVNb2Rlc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcbmltcG9ydCB7U2NvcmVWYWxpZGF0b3J9IGZyb20gJy4uL2NsYXNzZXMvc2NvcmUtdmFsaWRhdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjb3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgZ2V0UGVuZGluZ1Njb3JlcyhpbmRleDogbnVtYmVyLCBzY29yZXM6IFNjb3JlRW50cnlbXSwgcmVxdWlyZWRTY29yZTogbnVtYmVyKSB7XG4gICAgbGV0IHRvdGFsID0gcmVxdWlyZWRTY29yZTtcbiAgICBpZiAoaW5kZXggPiBzY29yZXMubGVuZ3RoIC0gMSkge1xuICAgICAgaW5kZXggPSBzY29yZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgaWYgKHNjb3Jlc1tpXS5pc1ZhbGlkKSB7XG4gICAgICAgIHRvdGFsID0gdG90YWwgLSBzY29yZXNbaV0udG90YWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1Njb3JlVmFsaWQoYWxsU2NvcmVzOiBTY29yZUVudHJ5W10sIGN1cnJlbnRTY29yZTogU2NvcmVFbnRyeSwgZ2FtZU1vZGU6IEdhbWVNb2RlcywgcmVxdWlyZWRTY29yZTogbnVtYmVyKTogU2NvcmVWYWxpZGF0b3Ige1xuICAgIGxldCBjdW1tdWxhdGVkU2NvcmVzID0gdGhpcy5nZXRQZW5kaW5nU2NvcmVzKGFsbFNjb3Jlcy5sZW5ndGggLSAxLCBhbGxTY29yZXMsIHJlcXVpcmVkU2NvcmUpO1xuICAgIGN1bW11bGF0ZWRTY29yZXMgPSBjdW1tdWxhdGVkU2NvcmVzIC0gY3VycmVudFNjb3JlLnRvdGFsO1xuXG4gICAgY29uc3QgaXNGaXJzdFZhbGlkRW50cnkgPSB0aGlzLmlzRmlyc3RWYWxpZEVudHJ5KGFsbFNjb3Jlcyk7XG4gICAgaWYgKFtHYW1lTW9kZXMuRE9VQkxFX0lOLCBHYW1lTW9kZXMuRE9VQkxFX0lOX0FORF9PVVRdLmluZGV4T2YoZ2FtZU1vZGUpID4gLTEgJiYgaXNGaXJzdFZhbGlkRW50cnkpIHtcbiAgICAgIGlmIChjdXJyZW50U2NvcmUudHlwZSA9PT0gMiAmJiBjdW1tdWxhdGVkU2NvcmVzID49IDApIHtcbiAgICAgICAgaWYgKGN1bW11bGF0ZWRTY29yZXMgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0VUX0lOVkFMSUQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0lOR0xFX0lOVkFMSUQ7XG4gICAgfVxuICAgIGlmIChbR2FtZU1vZGVzLlRSSVBQTEVfSU4sIEdhbWVNb2Rlcy5UUklQUExFX0lOX0FORF9PVVRdLmluZGV4T2YoZ2FtZU1vZGUpID4gLTEgICYmIGlzRmlyc3RWYWxpZEVudHJ5KSB7XG4gICAgICBpZiAoY3VycmVudFNjb3JlLnR5cGUgPT09IDMpIHtcbiAgICAgICAgaWYgKGN1bW11bGF0ZWRTY29yZXMgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0VUX0lOVkFMSUQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0lOR0xFX0lOVkFMSUQ7XG4gICAgfVxuXG4gICAgaWYgKGN1bW11bGF0ZWRTY29yZXMgPj0gMykge1xuICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgIH1cblxuICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID49IDIgJiYgW0dhbWVNb2Rlcy5ET1VCTEVfT1VULCBHYW1lTW9kZXMuRE9VQkxFX0lOX0FORF9PVVRdLmluZGV4T2YoZ2FtZU1vZGUpID4gLTEpIHtcbiAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICB9XG5cbiAgICBpZiAoY3VtbXVsYXRlZFNjb3JlcyA+PSAxICYmIFtHYW1lTW9kZXMuRE9VQkxFX0lOLCBHYW1lTW9kZXMuVFJJUFBMRV9JTiwgR2FtZU1vZGVzLkZSRUVfR0FNRV0uaW5kZXhPZihnYW1lTW9kZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgIH1cblxuICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID09PSAwKSB7XG4gICAgICBpZiAoW0dhbWVNb2Rlcy5ET1VCTEVfT1VULCBHYW1lTW9kZXMuRE9VQkxFX0lOX0FORF9PVVRdLmluZGV4T2YoZ2FtZU1vZGUpID4gLTEpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTY29yZS50eXBlID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5TRVRfSU5WQUxJRDtcbiAgICAgIH1cbiAgICAgIGlmIChbR2FtZU1vZGVzLlRSSVBQTEVfT1VULCBHYW1lTW9kZXMuVFJJUFBMRV9JTl9BTkRfT1VUXS5pbmRleE9mKGdhbWVNb2RlKSA+IC0xKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2NvcmUudHlwZSA9PT0gMykge1xuICAgICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0VUX0lOVkFMSUQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNFVF9JTlZBTElEO1xuICB9XG5cbiAgcHVibGljIGlzRmlyc3RWYWxpZEVudHJ5KHNjb3JlczogU2NvcmVFbnRyeVtdKSB7XG4gICAgcmV0dXJuIHNjb3Jlcy5maW5kSW5kZXgoKHMpID0+IHMuaXNWYWxpZCA9PT0gdHJ1ZSkgPT09IC0xO1xuICB9XG59XG4iXX0=