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
            console.log('start revert');
            /** @type {?} */
            var currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            console.log('currentData');
            console.log(currentData);
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
            console.log(iteration);
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
                    template: "<div *ngIf=\"dartGameData\" class=\"col-sm-12 col-xs-12 no-padding\">\n  <div class=\"col-sm-6 no-padding\">\n    <h3 class=\"no-margin\">\n      {{'page.dartScoreBoard.setup.throwInput' | translate}}\n    </h3>\n    <p  [innerHTML]=\"'page.dartScoreBoard.setup.throwInput.hint' | translate\">\n    </p>\n    <app-dart-board [throwsDone]=\"dartGameData.throwsDone\" (scoreEntered)=\"scoreEntered($event)\" (scoreReverted)=\"scoreReverted()\"></app-dart-board>\n  </div>\n  <div class=\"col-sm-6 no-padding no-border\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"no-margin\">\n        {{'page.dartScoreBoard.setup.playerList' | translate}}\n      </h3>\n      <p *ngIf=\"dartGameData.settings.isGameActive\" [innerHTML]=\"'page.dartScoreBoard.setup.playerLis.hint' | translate: getPlayerObject()\">\n      </p>\n    </div>\n    <ng-container *ngIf=\"(dartGameData.settings.isGameActive || dartGameData.legFinished)  && dartGameData.currentPlayerMapKeys\">\n      <div class=\"col-xs-12\" *ngFor=\"let player of dartGameData.currentPlayerMapKeys\">\n        <div class=\"no-padding col-xs-12 {{ isPlayerActive(player) ? 'player-active' : 'player-inactive'}}\">\n          <app-score-panel [playerName]=\"player\" [legData]=\"dartGameData.gameData.get(player).currentLeg\"\n                           [requiredScore]=\"dartGameData.settings.requiredScore\"\n                           [isActive]=\"isPlayerActive(player)\"></app-score-panel>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"alert-warning col-xs-12 game-over-panel\" *ngIf=\"getFirstFinisher() && !dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.winner' | translate: {'player': getFirstFinisher()}\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"alert-success col-xs-12 game-over-panel\" *ngIf=\"dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.finished' | translate: {'player': getFirstFinisher()}\">\n    {{'page.dartScoreBoard.game.finished' | translate}}\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                    styles: [".no-padding{padding:0}.game-over-panel{border-radius:5px;margin-top:1rem;text-align:center;padding:1rem;border:1px solid}.margin-top{margin-top:1rem}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUcxRDtJQVVFLDRCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUM5QyxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFTSx5Q0FBWTs7OztJQUFuQixVQUFvQixLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTs7Z0JBQ25HLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O29CQUNyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFD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QUNLLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNO1FBQy9HLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25JLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7O2dCQS9MRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsMDNFQUEwQzs7aUJBRTNDOzs7O2dCQVRPLFlBQVk7OzsrQkFZakIsS0FBSzs7SUEwTFIseUJBQUM7Q0FBQSxBQWpNRCxJQWlNQztTQTVMWSxrQkFBa0I7OztJQUU3QiwwQ0FDa0M7Ozs7O0lBRXRCLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NvcmVFbnRyeX0gZnJvbSAnLi4vY2xhc3Nlcy9zY29yZS1lbnRyeSc7XG5pbXBvcnQge0RhcnRHYW1lRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9kYXJ0LWdhbWUtZGF0YSc7XG5pbXBvcnQge1BsYXllckRhdGF9IGZyb20gJy4uL2NsYXNzZXMvcGxheWVyLWRhdGEnO1xuaW1wb3J0IHtTY29yZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4uL2NsYXNzZXMvZ2FtZS1tb2Rlcyc7XG5pbXBvcnQge1Njb3JlVmFsaWRhdG9yfSBmcm9tICcuLi9jbGFzc2VzL3Njb3JlLXZhbGlkYXRvcic7XG5pbXBvcnQge3VuZXNjYXBlfSBmcm9tICdxdWVyeXN0cmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1nYW1lLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbWUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHYW1lUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXJ0R2FtZURhdGE6IERhcnRHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjb3JlU2VydmljZTogU2NvcmVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBzY29yZUVudGVyZWQoZXZlbnQ6IFNjb3JlRW50cnkpIHtcbiAgICBpZiAodGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEgJiYgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciAmJiAhdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcgJiYgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMpIHtcbiAgICAgICAgY29uc3Qgc2NvcmVWYWxpZCA9IHRoaXMuc2NvcmVTZXJ2aWNlLmlzU2NvcmVWYWxpZChjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3JlcywgZXZlbnQsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmdhbWVNb2RlIGFzIEdhbWVNb2RlcywgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucmVxdWlyZWRTY29yZSk7XG4gICAgICAgIGV2ZW50LmlzVmFsaWQgPSBzY29yZVZhbGlkID09PSBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMucHVzaChldmVudCk7XG4gICAgICAgIGlmIChzY29yZVZhbGlkID09PSBTY29yZVZhbGlkYXRvci5TRVRfSU5WQUxJRCkge1xuICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZVNldChzY29yZVZhbGlkLCBjdXJyZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NvcmVTZXJ2aWNlLmdldFBlbmRpbmdTY29yZXMoY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gMSwgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUpID09PSAwKSB7XG4gICAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnRvdGFsVGhyb3dOdW1iZXJJbkxlZyA9IHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmU7XG4gICAgICAgICAgdGhpcy5zZWxlY3ROZXh0UGxheWVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TmV4dFBsYXllcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjb3JlUmV2ZXJ0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhICYmIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCByZXZlcnQnKTtcbiAgICAgIGxldCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50RGF0YScpO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudERhdGEpO1xuICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcgJiYgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMpIHtcbiAgICAgICAgY29uc3QgdGhyb3dzTGVmdENvdW50ID0gMyAtIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDM7XG4gICAgICAgIGlmICh0aHJvd3NMZWZ0Q291bnQgPT09IDMpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzTm90RmluaXNoZWRQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoZWNrSWZGaW5pc2hlZCgxKTtcbiAgICAgICAgY3VycmVudERhdGEgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgICAgIGxldCB0b0RlbGV0ZWRSb3dzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgY29uc3Qgc2NvcmUgPSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlc1tpXTtcbiAgICAgICAgICB0b0RlbGV0ZWRSb3dzICs9IDE7XG4gICAgICAgICAgaWYgKHNjb3JlLnR5cGUgIT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5zcGxpY2UoY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gdG9EZWxldGVkUm93cywgdG9EZWxldGVkUm93cyk7XG5cbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZSAtPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGFydE5ld0dhbWUoKSB7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMgPSBbXTtcbiAgICBjb25zdCBwbGF5ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUGxheWVyRGF0YT4oKTtcbiAgICBsZXQgZmlyc3RQbGF5ZXJBc3NpZ25lZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMpIHtcbiAgICAgIHBsYXllck1hcC5zZXQocGxheWVyLCBuZXcgUGxheWVyRGF0YSgpKTtcbiAgICAgIGlmICghZmlyc3RQbGF5ZXJBc3NpZ25lZCkge1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gcGxheWVyO1xuICAgICAgICBmaXJzdFBsYXllckFzc2lnbmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZSA9IDA7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEgPSBwbGF5ZXJNYXA7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cyA9IEFycmF5LmZyb20ocGxheWVyTWFwLmtleXMoKSk7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1BsYXllckFjdGl2ZShwbGF5ZXI6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9PT0gcGxheWVyO1xuICB9XG5cbiAgcHVibGljIGdldFBsYXllck9iamVjdCgpIHtcbiAgICBjb25zdCBkYXJ0Q291bnQgPSAzIC0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDM7XG4gICAgcmV0dXJuIHsnbmFtZSc6IHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIsICdkYXJ0Q291bnQnOiBkYXJ0Q291bnR9O1xuICB9XG5cbiAgcHVibGljIGdldEZpcnN0RmluaXNoZXIoKSB7XG4gICAgY29uc3QgZmluaXNoZXJBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldChwbGF5ZXIpO1xuICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lKSB7XG4gICAgICAgIGZpbmlzaGVyQXJyYXkucHVzaCh7J3BsYXllcic6IHBsYXllciwgJ2ZpbmlzaFRpbWUnOiBjdXJyZW50RGF0YS5jdXJyZW50TGVnLmZpbmlzaGVkVGltZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmluaXNoZXJBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBmaXJzdEZpbmlzaGVyID0gZmluaXNoZXJBcnJheVswXTtcbiAgICBmb3IgKGNvbnN0IGZpbmlzaGVyIG9mIGZpbmlzaGVyQXJyYXkpIHtcbiAgICAgIGlmIChmaW5pc2hlci5maW5pc2hUaW1lIDwgZmlyc3RGaW5pc2hlci5maW5pc2hUaW1lKSB7XG4gICAgICAgIGZpcnN0RmluaXNoZXIgPSBmaW5pc2hlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpcnN0RmluaXNoZXIucGxheWVyO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnZhbGlkYXRlU2V0KHNjb3JlVmFsaWQ6IFNjb3JlVmFsaWRhdG9yLCBjdXJyZW50RGF0YTogUGxheWVyRGF0YSB8IHVuZGVmaW5lZCkge1xuICAgIGxldCBudW1iZXJPZlRocm93c0RvbmUgPSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggJSAzO1xuICAgIGlmIChudW1iZXJPZlRocm93c0RvbmUgPT09IDApIHtcbiAgICAgIG51bWJlck9mVGhyb3dzRG9uZSA9IDM7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSAxOyBpID49IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIG51bWJlck9mVGhyb3dzRG9uZTsgaS0tKSB7XG4gICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlc1tpXS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdGhyb3dzTGVmdENvdW50ID0gMyAtIG51bWJlck9mVGhyb3dzRG9uZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRocm93c0xlZnRDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBkdW1teVNjb3JlID0gbmV3IFNjb3JlRW50cnkoKTtcbiAgICAgIGR1bW15U2NvcmUuaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgZHVtbXlTY29yZS50eXBlID0gMDtcbiAgICAgIGR1bW15U2NvcmUudG90YWwgPSAwO1xuICAgICAgZHVtbXlTY29yZS5maWVsZCA9IDA7XG4gICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5wdXNoKGR1bW15U2NvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0UHJldmlvdXNOb3RGaW5pc2hlZFBsYXllcihpdGVyYXRpb24/OiBudW1iZXIpIHtcbiAgICBpZiAoIWl0ZXJhdGlvbikge1xuICAgICAgaXRlcmF0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0aW9uICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgaWYgKGluZGV4T2ZBY3RpdmVQbGF5ZXIgPT09IDApIHtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzW3RoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzW2luZGV4T2ZBY3RpdmVQbGF5ZXIgLSAxXTtcbiAgICB9XG4gICAgdGhpcy5jaGVja0lmRmluaXNoZWQoaXRlcmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJZkZpbmlzaGVkKGl0ZXJhdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lKSB7XG4gICAgICBpZiAodGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZSAtIDEgPT09IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcudG90YWxUaHJvd051bWJlckluTGVnKSB7XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lID0gdW5kZWZpbmVkO1xuICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnRvdGFsVGhyb3dOdW1iZXJJbkxlZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuaXNHYW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVyYXRpb24gPD0gdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RQcmV2aW91c05vdEZpbmlzaGVkUGxheWVyKGl0ZXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdE5leHRQbGF5ZXIoaXRlcmF0aW9uPzogbnVtYmVyKSB7XG4gICAgaWYgKCFpdGVyYXRpb24pIHtcbiAgICAgIGl0ZXJhdGlvbiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mQWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycy5pbmRleE9mKHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgIGlmIChpbmRleE9mQWN0aXZlUGxheWVyID09PSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVyc1tpbmRleE9mQWN0aXZlUGxheWVyICsgMV07XG4gICAgfVxuICAgIGNvbnN0IG5ld1BsYXllclNjb3JlcyA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKS5jdXJyZW50TGVnLnNjb3JlcztcbiAgICBpZiAodGhpcy5zY29yZVNlcnZpY2UuZ2V0UGVuZGluZ1Njb3JlcyhuZXdQbGF5ZXJTY29yZXMubGVuZ3RoIC0gMSwgbmV3UGxheWVyU2NvcmVzLCB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5yZXF1aXJlZFNjb3JlKSA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coaXRlcmF0aW9uKTtcbiAgICAgIGlmIChpdGVyYXRpb24gPD0gdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dFBsYXllcihpdGVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19