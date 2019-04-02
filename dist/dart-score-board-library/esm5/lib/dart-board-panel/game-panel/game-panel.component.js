/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ScoreEntry } from '../classes/score-entry';
import { DartGameData } from '../classes/dart-game-data';
import { PlayerData } from '../classes/player-data';
import { ScoreService } from '../services/score.service';
import { ScoreValidator } from '../classes/score-validator';
var GamePanelComponent = /** @class */ (function () {
    function GamePanelComponent(scoreService) {
        this.scoreService = scoreService;
    }
    /**
     * @return {?}
     */
    GamePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GamePanelComponent.prototype.scoreEntered = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer && !this.dartGameData.legFinished) {
            /** @type {?} */
            var currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                var scoreValid = this.scoreService.isScoreValid(currentData.currentLeg.scores, event, (/** @type {?} */ (this.dartGameData.settings.gameMode)), this.dartGameData.settings.requiredScore);
                event.isValid = scoreValid === ScoreValidator.VALID;
                currentData.currentLeg.scores.push(event);
                if (scoreValid === ScoreValidator.SET_INVALID) {
                    this.invalidateSet(scoreValid, currentData);
                }
                if (this.scoreService.getPendingScores(currentData.currentLeg.scores.length - 1, currentData.currentLeg.scores, this.dartGameData.settings.requiredScore) === 0) {
                    currentData.currentLeg.finishedTime = new Date().getTime();
                    currentData.currentLeg.totalThrowNumberInLeg = this.dartGameData.throwsDone;
                    this.selectNextPlayer();
                }
                else {
                    if (currentData.currentLeg.scores.length % 3 === 0) {
                        this.selectNextPlayer();
                    }
                }
                this.dartGameData.throwsDone += 1;
            }
        }
    };
    /**
     * @return {?}
     */
    GamePanelComponent.prototype.scoreReverted = /**
     * @return {?}
     */
    function () {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
            /** @type {?} */
            var currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                var throwsLeftCount = 3 - currentData.currentLeg.scores.length % 3;
                if (throwsLeftCount === 3) {
                    this.selectPreviousNotFinishedPlayer();
                }
                this.checkIfFinished(1);
                currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
                /** @type {?} */
                var toDeletedRows = 0;
                for (var i = currentData.currentLeg.scores.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    var score = currentData.currentLeg.scores[i];
                    toDeletedRows += 1;
                    if (score.type !== 0) {
                        break;
                    }
                }
                currentData.currentLeg.scores.splice(currentData.currentLeg.scores.length - toDeletedRows, toDeletedRows);
                this.dartGameData.throwsDone -= 1;
            }
        }
    };
    /**
     * @return {?}
     */
    GamePanelComponent.prototype.startNewGame = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        this.dartGameData.currentPlayerMapKeys = [];
        /** @type {?} */
        var playerMap = new Map();
        /** @type {?} */
        var firstPlayerAssigned = false;
        try {
            for (var _b = tslib_1.__values(this.dartGameData.settings.players), _c = _b.next(); !_c.done; _c = _b.next()) {
                var player = _c.value;
                playerMap.set(player, new PlayerData());
                if (!firstPlayerAssigned) {
                    this.dartGameData.currentActivePlayer = player;
                    firstPlayerAssigned = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.dartGameData.throwsDone = 0;
        this.dartGameData.gameData = playerMap;
        this.dartGameData.legFinished = false;
        this.dartGameData.currentPlayerMapKeys = Array.from(playerMap.keys());
        this.dartGameData.settings.isGameActive = true;
    };
    /**
     * @param {?} player
     * @return {?}
     */
    GamePanelComponent.prototype.isPlayerActive = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        if (this.dartGameData.legFinished) {
            return false;
        }
        return this.dartGameData.currentActivePlayer === player;
    };
    /**
     * @return {?}
     */
    GamePanelComponent.prototype.getPlayerObject = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
        return { 'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount };
    };
    /**
     * @return {?}
     */
    GamePanelComponent.prototype.getFirstFinisher = /**
     * @return {?}
     */
    function () {
        var e_2, _a, e_3, _b;
        /** @type {?} */
        var finisherArray = [];
        try {
            for (var _c = tslib_1.__values(this.dartGameData.currentPlayerMapKeys), _d = _c.next(); !_d.done; _d = _c.next()) {
                var player = _d.value;
                /** @type {?} */
                var currentData = this.dartGameData.gameData.get(player);
                if (currentData.currentLeg.finishedTime) {
                    finisherArray.push({ 'player': player, 'finishTime': currentData.currentLeg.finishedTime });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (finisherArray.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var firstFinisher = finisherArray[0];
        try {
            for (var finisherArray_1 = tslib_1.__values(finisherArray), finisherArray_1_1 = finisherArray_1.next(); !finisherArray_1_1.done; finisherArray_1_1 = finisherArray_1.next()) {
                var finisher = finisherArray_1_1.value;
                if (finisher.finishTime < firstFinisher.finishTime) {
                    firstFinisher = finisher;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (finisherArray_1_1 && !finisherArray_1_1.done && (_b = finisherArray_1.return)) _b.call(finisherArray_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return firstFinisher.player;
    };
    /**
     * @private
     * @param {?} scoreValid
     * @param {?} currentData
     * @return {?}
     */
    GamePanelComponent.prototype.invalidateSet = /**
     * @private
     * @param {?} scoreValid
     * @param {?} currentData
     * @return {?}
     */
    function (scoreValid, currentData) {
        /** @type {?} */
        var numberOfThrowsDone = currentData.currentLeg.scores.length % 3;
        if (numberOfThrowsDone === 0) {
            numberOfThrowsDone = 3;
        }
        for (var i = currentData.currentLeg.scores.length - 1; i >= currentData.currentLeg.scores.length - numberOfThrowsDone; i--) {
            currentData.currentLeg.scores[i].isValid = false;
        }
        /** @type {?} */
        var throwsLeftCount = 3 - numberOfThrowsDone;
        for (var i = 0; i < throwsLeftCount; i++) {
            /** @type {?} */
            var dummyScore = new ScoreEntry();
            dummyScore.isValid = false;
            dummyScore.type = 0;
            dummyScore.total = 0;
            dummyScore.field = 0;
            currentData.currentLeg.scores.push(dummyScore);
        }
    };
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    GamePanelComponent.prototype.selectPreviousNotFinishedPlayer = /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    function (iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        var indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === 0) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[this.dartGameData.settings.players.length - 1];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer - 1];
        }
        this.checkIfFinished(iteration);
    };
    /**
     * @private
     * @param {?} iteration
     * @return {?}
     */
    GamePanelComponent.prototype.checkIfFinished = /**
     * @private
     * @param {?} iteration
     * @return {?}
     */
    function (iteration) {
        /** @type {?} */
        var currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
        if (currentData.currentLeg.finishedTime) {
            if (this.dartGameData.throwsDone - 1 === currentData.currentLeg.totalThrowNumberInLeg) {
                currentData.currentLeg.finishedTime = undefined;
                currentData.currentLeg.totalThrowNumberInLeg = undefined;
                this.dartGameData.legFinished = false;
                this.dartGameData.settings.isGameActive = true;
            }
            else {
                if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
                    this.selectPreviousNotFinishedPlayer(iteration);
                }
            }
        }
    };
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    GamePanelComponent.prototype.selectNextPlayer = /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    function (iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        var indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[0];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
        }
        /** @type {?} */
        var newPlayerScores = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores;
        if (this.scoreService.getPendingScores(newPlayerScores.length - 1, newPlayerScores, this.dartGameData.settings.requiredScore) === 0) {
            if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
                this.selectNextPlayer(iteration);
            }
            else {
                this.dartGameData.legFinished = true;
                this.dartGameData.settings.isGameActive = false;
            }
        }
    };
    GamePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-game-panel',
                    template: "<div *ngIf=\"dartGameData\" class=\"col-sm-12 col-xs-12 base-padding\">\n  <div class=\"col-sm-6 no-padding\">\n    <h3 class=\"no-margin\">\n      {{'page.dartScoreBoard.setup.throwInput' | translate}}\n    </h3>\n    <p  [innerHTML]=\"'page.dartScoreBoard.setup.throwInput.hint' | translate\">\n    </p>\n    <app-dart-board [throwsDone]=\"dartGameData.throwsDone\" (scoreEntered)=\"scoreEntered($event)\" (scoreReverted)=\"scoreReverted()\"></app-dart-board>\n  </div>\n  <div class=\"col-sm-6 no-padding no-border\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"no-margin\">\n        {{'page.dartScoreBoard.setup.playerList' | translate}}\n      </h3>\n      <p *ngIf=\"dartGameData.settings.isGameActive\" [innerHTML]=\"'page.dartScoreBoard.setup.playerLis.hint' | translate: getPlayerObject()\">\n      </p>\n    </div>\n    <ng-container *ngIf=\"(dartGameData.settings.isGameActive || dartGameData.legFinished)  && dartGameData.currentPlayerMapKeys\">\n      <div class=\"col-xs-12\" *ngFor=\"let player of dartGameData.currentPlayerMapKeys\">\n        <div class=\"no-padding col-xs-12 {{ isPlayerActive(player) ? 'player-active' : 'player-inactive'}}\">\n          <app-score-panel [playerName]=\"player\" [legData]=\"dartGameData.gameData.get(player).currentLeg\"\n                           [requiredScore]=\"dartGameData.settings.requiredScore\"\n                           [isActive]=\"isPlayerActive(player)\"></app-score-panel>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"alert-warning col-xs-12 game-over-panel\" *ngIf=\"getFirstFinisher() && !dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.winner' | translate: {'player': getFirstFinisher()}\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"alert-success col-xs-12 game-over-panel\" *ngIf=\"dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.finished' | translate: {'player': getFirstFinisher()}\">\n    {{'page.dartScoreBoard.game.finished' | translate}}\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [".no-padding{padding:0}.game-over-panel{border-radius:5px;margin-top:1rem;text-align:center;padding:1rem;border:1px solid}.margin-top{margin-top:1rem}.base-padding{padding:5px}"]
                }] }
    ];
    /** @nocollapse */
    GamePanelComponent.ctorParameters = function () { return [
        { type: ScoreService }
    ]; };
    GamePanelComponent.propDecorators = {
        dartGameData: [{ type: Input }]
    };
    return GamePanelComponent;
}());
export { GamePanelComponent };
if (false) {
    /** @type {?} */
    GamePanelComponent.prototype.dartGameData;
    /**
     * @type {?}
     * @private
     */
    GamePanelComponent.prototype.scoreService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUcxRDtJQVVFLDRCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFTSx5Q0FBWTs7OztJQUFuQixVQUFvQixLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTs7Z0JBQ25HLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O29CQUNyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztnQkFDbkwsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDcEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLFVBQVUsS0FBSyxjQUFjLENBQUMsV0FBVyxFQUFFO29CQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMvSixXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzRCxXQUFXLENBQUMsVUFBVSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO29CQUM1RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0wsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDbEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQ3pCO2lCQUNGO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQzthQUNuQztTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLDBDQUFhOzs7SUFBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUU7O2dCQUNuRSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUM7WUFDdkYsSUFBSSxXQUFXLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFOztvQkFDckQsZUFBZSxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEUsSUFBSSxlQUFlLEtBQUssQ0FBQyxFQUFFO29CQUN6QixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztpQkFDeEM7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O29CQUNoRixhQUFhLEdBQUcsQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O3dCQUM1RCxLQUFLLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxhQUFhLElBQUksQ0FBQyxDQUFDO29CQUNuQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUNwQixNQUFNO3FCQUNQO2lCQUNGO2dCQUNELFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUUxRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSx5Q0FBWTs7O0lBQW5COztRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDOztZQUN0QyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXNCOztZQUMzQyxtQkFBbUIsR0FBRyxLQUFLOztZQUMvQixLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFwRCxJQUFNLE1BQU0sV0FBQTtnQkFDZixTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7b0JBQy9DLG1CQUFtQixHQUFHLElBQUksQ0FBQztpQkFDNUI7YUFDRjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSwyQ0FBYzs7OztJQUFyQixVQUFzQixNQUFjO1FBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDakMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsS0FBSyxNQUFNLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVNLDRDQUFlOzs7SUFBdEI7O1lBQ1EsU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEgsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUNqRixDQUFDOzs7O0lBRU0sNkNBQWdCOzs7SUFBdkI7OztZQUNRLGFBQWEsR0FBRyxFQUFFOztZQUN4QixLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBeEQsSUFBTSxNQUFNLFdBQUE7O29CQUNULFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMxRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO29CQUN2QyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO2lCQUMzRjthQUNGOzs7Ozs7Ozs7UUFDRCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCOztZQUNHLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDOztZQUNwQyxLQUF1QixJQUFBLGtCQUFBLGlCQUFBLGFBQWEsQ0FBQSw0Q0FBQSx1RUFBRTtnQkFBakMsSUFBTSxRQUFRLDBCQUFBO2dCQUNqQixJQUFJLFFBQVEsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRTtvQkFDbEQsYUFBYSxHQUFHLFFBQVEsQ0FBQztpQkFDMUI7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTywwQ0FBYTs7Ozs7O0lBQXJCLFVBQXNCLFVBQTBCLEVBQUUsV0FBbUM7O1lBQy9FLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQ2pFLElBQUksa0JBQWtCLEtBQUssQ0FBQyxFQUFFO1lBQzVCLGtCQUFrQixHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLGtCQUFrQixFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFILFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbEQ7O1lBRUssZUFBZSxHQUFHLENBQUMsR0FBRyxrQkFBa0I7UUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGVBQWUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ2xDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUNuQyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUMzQixVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNwQixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNyQixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNyQixXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyw0REFBK0I7Ozs7O0lBQXZDLFVBQXdDLFNBQWtCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDaEI7O1lBQ0ssbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO1FBQzdHLElBQUksbUJBQW1CLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0g7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JHO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFTyw0Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsU0FBaUI7O1lBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUN6RixJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUU7Z0JBQ3JGLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztnQkFDaEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtvQkFDOUQsSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNqRDthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFNBQWtCO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDaEI7O1lBQ0ssbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDO1FBQzdHLElBQUksbUJBQW1CLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3JHOztZQUNLLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO1FBQy9HLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25JLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQ2pEO1NBQ0Y7SUFDSCxDQUFDOztnQkEzTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDQzRUFBMEM7O2lCQUUzQzs7OztnQkFUTyxZQUFZOzs7K0JBWWpCLEtBQUs7O0lBc0xSLHlCQUFDO0NBQUEsQUE3TEQsSUE2TEM7U0F4TFksa0JBQWtCOzs7SUFFN0IsMENBQ2tDOzs7OztJQUV0QiwwQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njb3JlRW50cnl9IGZyb20gJy4uL2NsYXNzZXMvc2NvcmUtZW50cnknO1xuaW1wb3J0IHtEYXJ0R2FtZURhdGF9IGZyb20gJy4uL2NsYXNzZXMvZGFydC1nYW1lLWRhdGEnO1xuaW1wb3J0IHtQbGF5ZXJEYXRhfSBmcm9tICcuLi9jbGFzc2VzL3BsYXllci1kYXRhJztcbmltcG9ydCB7U2NvcmVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zY29yZS5zZXJ2aWNlJztcbmltcG9ydCB7R2FtZU1vZGVzfSBmcm9tICcuLi9jbGFzc2VzL2dhbWUtbW9kZXMnO1xuaW1wb3J0IHtTY29yZVZhbGlkYXRvcn0gZnJvbSAnLi4vY2xhc3Nlcy9zY29yZS12YWxpZGF0b3InO1xuaW1wb3J0IHt1bmVzY2FwZX0gZnJvbSAncXVlcnlzdHJpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZ2FtZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nYW1lLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2FtZS1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2FtZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZGFydEdhbWVEYXRhOiBEYXJ0R2FtZURhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY29yZVNlcnZpY2U6IFNjb3JlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgc2NvcmVFbnRlcmVkKGV2ZW50OiBTY29yZUVudHJ5KSB7XG4gICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhICYmIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgJiYgIXRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICAgIGlmIChjdXJyZW50RGF0YS5jdXJyZW50TGVnICYmIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzKSB7XG4gICAgICAgIGNvbnN0IHNjb3JlVmFsaWQgPSB0aGlzLnNjb3JlU2VydmljZS5pc1Njb3JlVmFsaWQoY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMsIGV2ZW50LCB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5nYW1lTW9kZSBhcyBHYW1lTW9kZXMsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUpO1xuICAgICAgICBldmVudC5pc1ZhbGlkID0gc2NvcmVWYWxpZCA9PT0gU2NvcmVWYWxpZGF0b3IuVkFMSUQ7XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLnB1c2goZXZlbnQpO1xuICAgICAgICBpZiAoc2NvcmVWYWxpZCA9PT0gU2NvcmVWYWxpZGF0b3IuU0VUX0lOVkFMSUQpIHtcbiAgICAgICAgICB0aGlzLmludmFsaWRhdGVTZXQoc2NvcmVWYWxpZCwgY3VycmVudERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjb3JlU2VydmljZS5nZXRQZW5kaW5nU2NvcmVzKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIDEsIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLCB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5yZXF1aXJlZFNjb3JlKSA9PT0gMCkge1xuICAgICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy50b3RhbFRocm93TnVtYmVySW5MZWcgPSB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lO1xuICAgICAgICAgIHRoaXMuc2VsZWN0TmV4dFBsYXllcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggJSAzID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE5leHRQbGF5ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY29yZVJldmVydGVkKCkge1xuICAgIGlmICh0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YSAmJiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKSB7XG4gICAgICBsZXQgY3VycmVudERhdGEgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZyAmJiBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcykge1xuICAgICAgICBjb25zdCB0aHJvd3NMZWZ0Q291bnQgPSAzIC0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMztcbiAgICAgICAgaWYgKHRocm93c0xlZnRDb3VudCA9PT0gMykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNOb3RGaW5pc2hlZFBsYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tJZkZpbmlzaGVkKDEpO1xuICAgICAgICBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICAgICAgbGV0IHRvRGVsZXRlZFJvd3MgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzW2ldO1xuICAgICAgICAgIHRvRGVsZXRlZFJvd3MgKz0gMTtcbiAgICAgICAgICBpZiAoc2NvcmUudHlwZSAhPT0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLnNwbGljZShjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSB0b0RlbGV0ZWRSb3dzLCB0b0RlbGV0ZWRSb3dzKTtcblxuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lIC09IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cyA9IFtdO1xuICAgIGNvbnN0IHBsYXllck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQbGF5ZXJEYXRhPigpO1xuICAgIGxldCBmaXJzdFBsYXllckFzc2lnbmVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycykge1xuICAgICAgcGxheWVyTWFwLnNldChwbGF5ZXIsIG5ldyBQbGF5ZXJEYXRhKCkpO1xuICAgICAgaWYgKCFmaXJzdFBsYXllckFzc2lnbmVkKSB7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIGZpcnN0UGxheWVyQXNzaWduZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lID0gMDtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YSA9IHBsYXllck1hcDtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gQXJyYXkuZnJvbShwbGF5ZXJNYXAua2V5cygpKTtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGlzUGxheWVyQWN0aXZlKHBsYXllcjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID09PSBwbGF5ZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGxheWVyT2JqZWN0KCkge1xuICAgIGNvbnN0IGRhcnRDb3VudCA9IDMgLSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcikuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMztcbiAgICByZXR1cm4geyduYW1lJzogdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciwgJ2RhcnRDb3VudCc6IGRhcnRDb3VudH07XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RGaW5pc2hlcigpIHtcbiAgICBjb25zdCBmaW5pc2hlckFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHBsYXllcik7XG4gICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUpIHtcbiAgICAgICAgZmluaXNoZXJBcnJheS5wdXNoKHsncGxheWVyJzogcGxheWVyLCAnZmluaXNoVGltZSc6IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaW5pc2hlckFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGZpcnN0RmluaXNoZXIgPSBmaW5pc2hlckFycmF5WzBdO1xuICAgIGZvciAoY29uc3QgZmluaXNoZXIgb2YgZmluaXNoZXJBcnJheSkge1xuICAgICAgaWYgKGZpbmlzaGVyLmZpbmlzaFRpbWUgPCBmaXJzdEZpbmlzaGVyLmZpbmlzaFRpbWUpIHtcbiAgICAgICAgZmlyc3RGaW5pc2hlciA9IGZpbmlzaGVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlyc3RGaW5pc2hlci5wbGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIGludmFsaWRhdGVTZXQoc2NvcmVWYWxpZDogU2NvcmVWYWxpZGF0b3IsIGN1cnJlbnREYXRhOiBQbGF5ZXJEYXRhIHwgdW5kZWZpbmVkKSB7XG4gICAgbGV0IG51bWJlck9mVGhyb3dzRG9uZSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDM7XG4gICAgaWYgKG51bWJlck9mVGhyb3dzRG9uZSA9PT0gMCkge1xuICAgICAgbnVtYmVyT2ZUaHJvd3NEb25lID0gMztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIDE7IGkgPj0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gbnVtYmVyT2ZUaHJvd3NEb25lOyBpLS0pIHtcbiAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzW2ldLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB0aHJvd3NMZWZ0Q291bnQgPSAzIC0gbnVtYmVyT2ZUaHJvd3NEb25lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhyb3dzTGVmdENvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGR1bW15U2NvcmUgPSBuZXcgU2NvcmVFbnRyeSgpO1xuICAgICAgZHVtbXlTY29yZS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICBkdW1teVNjb3JlLnR5cGUgPSAwO1xuICAgICAgZHVtbXlTY29yZS50b3RhbCA9IDA7XG4gICAgICBkdW1teVNjb3JlLmZpZWxkID0gMDtcbiAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLnB1c2goZHVtbXlTY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RQcmV2aW91c05vdEZpbmlzaGVkUGxheWVyKGl0ZXJhdGlvbj86IG51bWJlcikge1xuICAgIGlmICghaXRlcmF0aW9uKSB7XG4gICAgICBpdGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRpb24gKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMuaW5kZXhPZih0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICBpZiAoaW5kZXhPZkFjdGl2ZVBsYXllciA9PT0gMCkge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycy5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbaW5kZXhPZkFjdGl2ZVBsYXllciAtIDFdO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrSWZGaW5pc2hlZChpdGVyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lmRmluaXNoZWQoaXRlcmF0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUpIHtcbiAgICAgIGlmICh0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lIC0gMSA9PT0gY3VycmVudERhdGEuY3VycmVudExlZy50b3RhbFRocm93TnVtYmVySW5MZWcpIHtcbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcudG90YWxUaHJvd051bWJlckluTGVnID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA8PSB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzTm90RmluaXNoZWRQbGF5ZXIoaXRlcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0TmV4dFBsYXllcihpdGVyYXRpb24/OiBudW1iZXIpIHtcbiAgICBpZiAoIWl0ZXJhdGlvbikge1xuICAgICAgaXRlcmF0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0aW9uICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgaWYgKGluZGV4T2ZBY3RpdmVQbGF5ZXIgPT09IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzW2luZGV4T2ZBY3RpdmVQbGF5ZXIgKyAxXTtcbiAgICB9XG4gICAgY29uc3QgbmV3UGxheWVyU2NvcmVzID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpLmN1cnJlbnRMZWcuc2NvcmVzO1xuICAgIGlmICh0aGlzLnNjb3JlU2VydmljZS5nZXRQZW5kaW5nU2NvcmVzKG5ld1BsYXllclNjb3Jlcy5sZW5ndGggLSAxLCBuZXdQbGF5ZXJTY29yZXMsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUpID09PSAwKSB7XG4gICAgICBpZiAoaXRlcmF0aW9uIDw9IHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdE5leHRQbGF5ZXIoaXRlcmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuaXNHYW1lQWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==