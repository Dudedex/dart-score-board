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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LWJvYXJkLXBhbmVsL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQUdFO0lBQWdCLENBQUM7Ozs7Ozs7SUFFVix1Q0FBZ0I7Ozs7OztJQUF2QixVQUF3QixLQUFhLEVBQUUsTUFBb0IsRUFBRSxhQUFxQjs7WUFDNUUsS0FBSyxHQUFHLGFBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUNqQztTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUVNLG1DQUFZOzs7Ozs7O0lBQW5CLFVBQW9CLFNBQXVCLEVBQUUsWUFBd0IsRUFBRSxRQUFtQixFQUFFLGFBQXFCOztZQUMzRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQztRQUM1Rixn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LElBNEVDO1NBM0VZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njb3JlRW50cnl9IGZyb20gJy4uL2NsYXNzZXMvc2NvcmUtZW50cnknO1xuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4uL2NsYXNzZXMvZ2FtZS1tb2Rlcyc7XG5pbXBvcnQge1Njb3JlVmFsaWRhdG9yfSBmcm9tICcuLi9jbGFzc2VzL3Njb3JlLXZhbGlkYXRvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY29yZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGdldFBlbmRpbmdTY29yZXMoaW5kZXg6IG51bWJlciwgc2NvcmVzOiBTY29yZUVudHJ5W10sIHJlcXVpcmVkU2NvcmU6IG51bWJlcikge1xuICAgIGxldCB0b3RhbCA9IHJlcXVpcmVkU2NvcmU7XG4gICAgaWYgKGluZGV4ID4gc2NvcmVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4ID0gc2NvcmVzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIGlmIChzY29yZXNbaV0uaXNWYWxpZCkge1xuICAgICAgICB0b3RhbCA9IHRvdGFsIC0gc2NvcmVzW2ldLnRvdGFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBwdWJsaWMgaXNTY29yZVZhbGlkKGFsbFNjb3JlczogU2NvcmVFbnRyeVtdLCBjdXJyZW50U2NvcmU6IFNjb3JlRW50cnksIGdhbWVNb2RlOiBHYW1lTW9kZXMsIHJlcXVpcmVkU2NvcmU6IG51bWJlcik6IFNjb3JlVmFsaWRhdG9yIHtcbiAgICBsZXQgY3VtbXVsYXRlZFNjb3JlcyA9IHRoaXMuZ2V0UGVuZGluZ1Njb3JlcyhhbGxTY29yZXMubGVuZ3RoIC0gMSwgYWxsU2NvcmVzLCByZXF1aXJlZFNjb3JlKTtcbiAgICBjdW1tdWxhdGVkU2NvcmVzID0gY3VtbXVsYXRlZFNjb3JlcyAtIGN1cnJlbnRTY29yZS50b3RhbDtcblxuICAgIGNvbnN0IGlzRmlyc3RWYWxpZEVudHJ5ID0gdGhpcy5pc0ZpcnN0VmFsaWRFbnRyeShhbGxTY29yZXMpO1xuICAgIGlmIChbR2FtZU1vZGVzLkRPVUJMRV9JTiwgR2FtZU1vZGVzLkRPVUJMRV9JTl9BTkRfT1VUXS5pbmRleE9mKGdhbWVNb2RlKSA+IC0xICYmIGlzRmlyc3RWYWxpZEVudHJ5KSB7XG4gICAgICBpZiAoY3VycmVudFNjb3JlLnR5cGUgPT09IDIgJiYgY3VtbXVsYXRlZFNjb3JlcyA+PSAwKSB7XG4gICAgICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID49IDApIHtcbiAgICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNFVF9JTlZBTElEO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNJTkdMRV9JTlZBTElEO1xuICAgIH1cbiAgICBpZiAoW0dhbWVNb2Rlcy5UUklQUExFX0lOLCBHYW1lTW9kZXMuVFJJUFBMRV9JTl9BTkRfT1VUXS5pbmRleE9mKGdhbWVNb2RlKSA+IC0xICAmJiBpc0ZpcnN0VmFsaWRFbnRyeSkge1xuICAgICAgaWYgKGN1cnJlbnRTY29yZS50eXBlID09PSAzKSB7XG4gICAgICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID49IDApIHtcbiAgICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNFVF9JTlZBTElEO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNJTkdMRV9JTlZBTElEO1xuICAgIH1cblxuICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID49IDMpIHtcbiAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICB9XG5cbiAgICBpZiAoY3VtbXVsYXRlZFNjb3JlcyA+PSAyICYmIFtHYW1lTW9kZXMuRE9VQkxFX09VVCwgR2FtZU1vZGVzLkRPVUJMRV9JTl9BTkRfT1VUXS5pbmRleE9mKGdhbWVNb2RlKSA+IC0xKSB7XG4gICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgfVxuXG4gICAgaWYgKGN1bW11bGF0ZWRTY29yZXMgPj0gMSAmJiBHYW1lTW9kZXMuRlJFRV9HQU1FID09PSBnYW1lTW9kZSkge1xuICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgIH1cblxuICAgIGlmIChjdW1tdWxhdGVkU2NvcmVzID09PSAwKSB7XG4gICAgICBpZiAoW0dhbWVNb2Rlcy5ET1VCTEVfT1VULCBHYW1lTW9kZXMuRE9VQkxFX0lOX0FORF9PVVRdLmluZGV4T2YoZ2FtZU1vZGUpID4gLTEpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTY29yZS50eXBlID09PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5TRVRfSU5WQUxJRDtcbiAgICAgIH1cbiAgICAgIGlmIChbR2FtZU1vZGVzLlRSSVBQTEVfT1VULCBHYW1lTW9kZXMuVFJJUFBMRV9JTl9BTkRfT1VUXS5pbmRleE9mKGdhbWVNb2RlKSA+IC0xKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2NvcmUudHlwZSA9PT0gMykge1xuICAgICAgICAgIHJldHVybiBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuU0VUX0lOVkFMSUQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNjb3JlVmFsaWRhdG9yLlNFVF9JTlZBTElEO1xuICB9XG5cbiAgcHVibGljIGlzRmlyc3RWYWxpZEVudHJ5KHNjb3JlczogU2NvcmVFbnRyeVtdKSB7XG4gICAgcmV0dXJuIHNjb3Jlcy5maW5kSW5kZXgoKHMpID0+IHMuaXNWYWxpZCA9PT0gdHJ1ZSkgPT09IC0xO1xuICB9XG59XG4iXX0=