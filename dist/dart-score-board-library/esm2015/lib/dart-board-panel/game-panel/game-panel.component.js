/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ScoreEntry } from '../classes/score-entry';
import { DartGameData } from '../classes/dart-game-data';
import { PlayerData } from '../classes/player-data';
import { ScoreService } from '../services/score.service';
import { ScoreValidator } from '../classes/score-validator';
export class GamePanelComponent {
    /**
     * @param {?} scoreService
     */
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scoreEntered(event) {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer && !this.dartGameData.legFinished) {
            /** @type {?} */
            const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                const scoreValid = this.scoreService.isScoreValid(currentData.currentLeg.scores, event, (/** @type {?} */ (this.dartGameData.settings.gameMode)), this.dartGameData.settings.requiredScore);
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
    }
    /**
     * @return {?}
     */
    scoreReverted() {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
            console.log('start revert');
            /** @type {?} */
            let currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            console.log('currentData');
            console.log(currentData);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                const throwsLeftCount = 3 - currentData.currentLeg.scores.length % 3;
                if (throwsLeftCount === 3) {
                    this.selectPreviousNotFinishedPlayer();
                }
                this.checkIfFinished(1);
                currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
                /** @type {?} */
                let toDeletedRows = 0;
                for (let i = currentData.currentLeg.scores.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    const score = currentData.currentLeg.scores[i];
                    toDeletedRows += 1;
                    if (score.type !== 0) {
                        break;
                    }
                }
                currentData.currentLeg.scores.splice(currentData.currentLeg.scores.length - toDeletedRows, toDeletedRows);
                this.dartGameData.throwsDone -= 1;
            }
        }
    }
    /**
     * @return {?}
     */
    startNewGame() {
        this.dartGameData.currentPlayerMapKeys = [];
        /** @type {?} */
        const playerMap = new Map();
        /** @type {?} */
        let firstPlayerAssigned = false;
        for (const player of this.dartGameData.settings.players) {
            playerMap.set(player, new PlayerData());
            if (!firstPlayerAssigned) {
                this.dartGameData.currentActivePlayer = player;
                firstPlayerAssigned = true;
            }
        }
        this.dartGameData.throwsDone = 0;
        this.dartGameData.gameData = playerMap;
        this.dartGameData.legFinished = false;
        this.dartGameData.currentPlayerMapKeys = Array.from(playerMap.keys());
        this.dartGameData.settings.isGameActive = true;
    }
    /**
     * @param {?} player
     * @return {?}
     */
    isPlayerActive(player) {
        if (this.dartGameData.legFinished) {
            return false;
        }
        return this.dartGameData.currentActivePlayer === player;
    }
    /**
     * @return {?}
     */
    getPlayerObject() {
        /** @type {?} */
        const dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
        return { 'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount };
    }
    /**
     * @return {?}
     */
    getFirstFinisher() {
        /** @type {?} */
        const finisherArray = [];
        for (const player of this.dartGameData.currentPlayerMapKeys) {
            /** @type {?} */
            const currentData = this.dartGameData.gameData.get(player);
            if (currentData.currentLeg.finishedTime) {
                finisherArray.push({ 'player': player, 'finishTime': currentData.currentLeg.finishedTime });
            }
        }
        if (finisherArray.length === 0) {
            return undefined;
        }
        /** @type {?} */
        let firstFinisher = finisherArray[0];
        for (const finisher of finisherArray) {
            if (finisher.finishTime < firstFinisher.finishTime) {
                firstFinisher = finisher;
            }
        }
        return firstFinisher.player;
    }
    /**
     * @private
     * @param {?} scoreValid
     * @param {?} currentData
     * @return {?}
     */
    invalidateSet(scoreValid, currentData) {
        /** @type {?} */
        let numberOfThrowsDone = currentData.currentLeg.scores.length % 3;
        if (numberOfThrowsDone === 0) {
            numberOfThrowsDone = 3;
        }
        for (let i = currentData.currentLeg.scores.length - 1; i >= currentData.currentLeg.scores.length - numberOfThrowsDone; i--) {
            currentData.currentLeg.scores[i].isValid = false;
        }
        /** @type {?} */
        const throwsLeftCount = 3 - numberOfThrowsDone;
        for (let i = 0; i < throwsLeftCount; i++) {
            /** @type {?} */
            const dummyScore = new ScoreEntry();
            dummyScore.isValid = false;
            dummyScore.type = 0;
            dummyScore.total = 0;
            dummyScore.field = 0;
            currentData.currentLeg.scores.push(dummyScore);
        }
    }
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    selectPreviousNotFinishedPlayer(iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === 0) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[this.dartGameData.settings.players.length - 1];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer - 1];
        }
        this.checkIfFinished(iteration);
    }
    /**
     * @private
     * @param {?} iteration
     * @return {?}
     */
    checkIfFinished(iteration) {
        /** @type {?} */
        const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
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
    }
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    selectNextPlayer(iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[0];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
        }
        /** @type {?} */
        const newPlayerScores = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores;
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
    }
}
GamePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-game-panel',
                template: "<div *ngIf=\"dartGameData\" class=\"col-sm-12 col-xs-12 no-padding\">\n  <div class=\"col-sm-6 no-padding\">\n    <h3 class=\"no-margin\">\n      {{'page.dartScoreBoard.setup.throwInput' | translate}}\n    </h3>\n    <p  [innerHTML]=\"'page.dartScoreBoard.setup.throwInput.hint' | translate\">\n    </p>\n    <app-dart-board [throwsDone]=\"dartGameData.throwsDone\" (scoreEntered)=\"scoreEntered($event)\" (scoreReverted)=\"scoreReverted()\"></app-dart-board>\n  </div>\n  <div class=\"col-sm-6 no-padding no-border\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"no-margin\">\n        {{'page.dartScoreBoard.setup.playerList' | translate}}\n      </h3>\n      <p *ngIf=\"dartGameData.settings.isGameActive\" [innerHTML]=\"'page.dartScoreBoard.setup.playerLis.hint' | translate: getPlayerObject()\">\n      </p>\n    </div>\n    <ng-container *ngIf=\"(dartGameData.settings.isGameActive || dartGameData.legFinished)  && dartGameData.currentPlayerMapKeys\">\n      <div class=\"col-xs-12\" *ngFor=\"let player of dartGameData.currentPlayerMapKeys\">\n        <div class=\"no-padding col-xs-12 {{ isPlayerActive(player) ? 'player-active' : 'player-inactive'}}\">\n          <app-score-panel [playerName]=\"player\" [legData]=\"dartGameData.gameData.get(player).currentLeg\"\n                           [requiredScore]=\"dartGameData.settings.requiredScore\"\n                           [isActive]=\"isPlayerActive(player)\"></app-score-panel>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"alert-warning col-xs-12 game-over-panel\" *ngIf=\"getFirstFinisher() && !dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.winner' | translate: {'player': getFirstFinisher()}\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"alert-success col-xs-12 game-over-panel\" *ngIf=\"dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.finished' | translate: {'player': getFirstFinisher()}\">\n    {{'page.dartScoreBoard.game.finished' | translate}}\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: [".no-padding{padding:0}.game-over-panel{border-radius:5px;margin-top:1rem;text-align:center;padding:1rem;border:1px solid}.margin-top{margin-top:1rem}"]
            }] }
];
/** @nocollapse */
GamePanelComponent.ctorParameters = () => [
    { type: ScoreService }
];
GamePanelComponent.propDecorators = {
    dartGameData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GamePanelComponent.prototype.dartGameData;
    /**
     * @type {?}
     * @private
     */
    GamePanelComponent.prototype.scoreService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBUTFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFLN0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDOUMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTs7a0JBQ25HLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O3NCQUNyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFD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QUFDLEVBQUU7WUFDbkksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtnQkFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUNqRDtTQUNGO0lBQ0gsQ0FBQzs7O1lBL0xGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiwwM0VBQTBDOzthQUUzQzs7OztZQVRPLFlBQVk7OzsyQkFZakIsS0FBSzs7OztJQUFOLDBDQUNrQzs7Ozs7SUFFdEIsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTY29yZUVudHJ5fSBmcm9tICcuLi9jbGFzc2VzL3Njb3JlLWVudHJ5JztcbmltcG9ydCB7RGFydEdhbWVEYXRhfSBmcm9tICcuLi9jbGFzc2VzL2RhcnQtZ2FtZS1kYXRhJztcbmltcG9ydCB7UGxheWVyRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9wbGF5ZXItZGF0YSc7XG5pbXBvcnQge1Njb3JlU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvc2NvcmUuc2VydmljZSc7XG5pbXBvcnQge0dhbWVNb2Rlc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcbmltcG9ydCB7U2NvcmVWYWxpZGF0b3J9IGZyb20gJy4uL2NsYXNzZXMvc2NvcmUtdmFsaWRhdG9yJztcbmltcG9ydCB7dW5lc2NhcGV9IGZyb20gJ3F1ZXJ5c3RyaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWdhbWUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2FtZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dhbWUtcGFuZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdhbWVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRhcnRHYW1lRGF0YTogRGFydEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NvcmVTZXJ2aWNlOiBTY29yZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIHNjb3JlRW50ZXJlZChldmVudDogU2NvcmVFbnRyeSkge1xuICAgIGlmICh0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YSAmJiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyICYmICF0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCkge1xuICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZyAmJiBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcykge1xuICAgICAgICBjb25zdCBzY29yZVZhbGlkID0gdGhpcy5zY29yZVNlcnZpY2UuaXNTY29yZVZhbGlkKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLCBldmVudCwgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuZ2FtZU1vZGUgYXMgR2FtZU1vZGVzLCB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5yZXF1aXJlZFNjb3JlKTtcbiAgICAgICAgZXZlbnQuaXNWYWxpZCA9IHNjb3JlVmFsaWQgPT09IFNjb3JlVmFsaWRhdG9yLlZBTElEO1xuICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgaWYgKHNjb3JlVmFsaWQgPT09IFNjb3JlVmFsaWRhdG9yLlNFVF9JTlZBTElEKSB7XG4gICAgICAgICAgdGhpcy5pbnZhbGlkYXRlU2V0KHNjb3JlVmFsaWQsIGN1cnJlbnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY29yZVNlcnZpY2UuZ2V0UGVuZGluZ1Njb3JlcyhjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSAxLCBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3JlcywgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucmVxdWlyZWRTY29yZSkgPT09IDApIHtcbiAgICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLmZpbmlzaGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcudG90YWxUaHJvd051bWJlckluTGVnID0gdGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZTtcbiAgICAgICAgICB0aGlzLnNlbGVjdE5leHRQbGF5ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3ROZXh0UGxheWVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmUgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2NvcmVSZXZlcnRlZCgpIHtcbiAgICBpZiAodGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEgJiYgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcikge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHJldmVydCcpO1xuICAgICAgbGV0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnREYXRhJyk7XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50RGF0YSk7XG4gICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZyAmJiBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcykge1xuICAgICAgICBjb25zdCB0aHJvd3NMZWZ0Q291bnQgPSAzIC0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMztcbiAgICAgICAgaWYgKHRocm93c0xlZnRDb3VudCA9PT0gMykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNOb3RGaW5pc2hlZFBsYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tJZkZpbmlzaGVkKDEpO1xuICAgICAgICBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICAgICAgbGV0IHRvRGVsZXRlZFJvd3MgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBjb25zdCBzY29yZSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzW2ldO1xuICAgICAgICAgIHRvRGVsZXRlZFJvd3MgKz0gMTtcbiAgICAgICAgICBpZiAoc2NvcmUudHlwZSAhPT0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLnNwbGljZShjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSB0b0RlbGV0ZWRSb3dzLCB0b0RlbGV0ZWRSb3dzKTtcblxuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lIC09IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpIHtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cyA9IFtdO1xuICAgIGNvbnN0IHBsYXllck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBQbGF5ZXJEYXRhPigpO1xuICAgIGxldCBmaXJzdFBsYXllckFzc2lnbmVkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycykge1xuICAgICAgcGxheWVyTWFwLnNldChwbGF5ZXIsIG5ldyBQbGF5ZXJEYXRhKCkpO1xuICAgICAgaWYgKCFmaXJzdFBsYXllckFzc2lnbmVkKSB7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIGZpcnN0UGxheWVyQXNzaWduZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lID0gMDtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YSA9IHBsYXllck1hcDtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gQXJyYXkuZnJvbShwbGF5ZXJNYXAua2V5cygpKTtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGlzUGxheWVyQWN0aXZlKHBsYXllcjogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID09PSBwbGF5ZXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGxheWVyT2JqZWN0KCkge1xuICAgIGNvbnN0IGRhcnRDb3VudCA9IDMgLSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcikuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMztcbiAgICByZXR1cm4geyduYW1lJzogdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciwgJ2RhcnRDb3VudCc6IGRhcnRDb3VudH07XG4gIH1cblxuICBwdWJsaWMgZ2V0Rmlyc3RGaW5pc2hlcigpIHtcbiAgICBjb25zdCBmaW5pc2hlckFycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHBsYXllcik7XG4gICAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUpIHtcbiAgICAgICAgZmluaXNoZXJBcnJheS5wdXNoKHsncGxheWVyJzogcGxheWVyLCAnZmluaXNoVGltZSc6IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuZmluaXNoZWRUaW1lfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmaW5pc2hlckFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGZpcnN0RmluaXNoZXIgPSBmaW5pc2hlckFycmF5WzBdO1xuICAgIGZvciAoY29uc3QgZmluaXNoZXIgb2YgZmluaXNoZXJBcnJheSkge1xuICAgICAgaWYgKGZpbmlzaGVyLmZpbmlzaFRpbWUgPCBmaXJzdEZpbmlzaGVyLmZpbmlzaFRpbWUpIHtcbiAgICAgICAgZmlyc3RGaW5pc2hlciA9IGZpbmlzaGVyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlyc3RGaW5pc2hlci5wbGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIGludmFsaWRhdGVTZXQoc2NvcmVWYWxpZDogU2NvcmVWYWxpZGF0b3IsIGN1cnJlbnREYXRhOiBQbGF5ZXJEYXRhIHwgdW5kZWZpbmVkKSB7XG4gICAgbGV0IG51bWJlck9mVGhyb3dzRG9uZSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDM7XG4gICAgaWYgKG51bWJlck9mVGhyb3dzRG9uZSA9PT0gMCkge1xuICAgICAgbnVtYmVyT2ZUaHJvd3NEb25lID0gMztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIDE7IGkgPj0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gbnVtYmVyT2ZUaHJvd3NEb25lOyBpLS0pIHtcbiAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzW2ldLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCB0aHJvd3NMZWZ0Q291bnQgPSAzIC0gbnVtYmVyT2ZUaHJvd3NEb25lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhyb3dzTGVmdENvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGR1bW15U2NvcmUgPSBuZXcgU2NvcmVFbnRyeSgpO1xuICAgICAgZHVtbXlTY29yZS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICBkdW1teVNjb3JlLnR5cGUgPSAwO1xuICAgICAgZHVtbXlTY29yZS50b3RhbCA9IDA7XG4gICAgICBkdW1teVNjb3JlLmZpZWxkID0gMDtcbiAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLnB1c2goZHVtbXlTY29yZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RQcmV2aW91c05vdEZpbmlzaGVkUGxheWVyKGl0ZXJhdGlvbj86IG51bWJlcikge1xuICAgIGlmICghaXRlcmF0aW9uKSB7XG4gICAgICBpdGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRpb24gKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMuaW5kZXhPZih0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICBpZiAoaW5kZXhPZkFjdGl2ZVBsYXllciA9PT0gMCkge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycy5sZW5ndGggLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbaW5kZXhPZkFjdGl2ZVBsYXllciAtIDFdO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrSWZGaW5pc2hlZChpdGVyYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lmRmluaXNoZWQoaXRlcmF0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICBpZiAoY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUpIHtcbiAgICAgIGlmICh0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lIC0gMSA9PT0gY3VycmVudERhdGEuY3VycmVudExlZy50b3RhbFRocm93TnVtYmVySW5MZWcpIHtcbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcudG90YWxUaHJvd051bWJlckluTGVnID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA8PSB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFByZXZpb3VzTm90RmluaXNoZWRQbGF5ZXIoaXRlcmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0TmV4dFBsYXllcihpdGVyYXRpb24/OiBudW1iZXIpIHtcbiAgICBpZiAoIWl0ZXJhdGlvbikge1xuICAgICAgaXRlcmF0aW9uID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlcmF0aW9uICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4T2ZBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcik7XG4gICAgaWYgKGluZGV4T2ZBY3RpdmVQbGF5ZXIgPT09IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzW2luZGV4T2ZBY3RpdmVQbGF5ZXIgKyAxXTtcbiAgICB9XG4gICAgY29uc3QgbmV3UGxheWVyU2NvcmVzID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpLmN1cnJlbnRMZWcuc2NvcmVzO1xuICAgIGlmICh0aGlzLnNjb3JlU2VydmljZS5nZXRQZW5kaW5nU2NvcmVzKG5ld1BsYXllclNjb3Jlcy5sZW5ndGggLSAxLCBuZXdQbGF5ZXJTY29yZXMsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUpID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVyYXRpb24pO1xuICAgICAgaWYgKGl0ZXJhdGlvbiA8PSB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3ROZXh0UGxheWVyKGl0ZXJhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5sZWdGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmlzR2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=