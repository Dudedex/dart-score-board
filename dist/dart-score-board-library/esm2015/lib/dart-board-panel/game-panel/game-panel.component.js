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
            /** @type {?} */
            let currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
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
                template: "<div *ngIf=\"dartGameData\" class=\"col-sm-12 col-xs-12 base-padding\">\n  <div class=\"col-sm-6 no-padding\">\n    <h3 class=\"no-margin\">\n      {{'page.dartScoreBoard.setup.throwInput' | translate}}\n    </h3>\n    <p  [innerHTML]=\"'page.dartScoreBoard.setup.throwInput.hint' | translate\">\n    </p>\n    <app-dart-board [throwsDone]=\"dartGameData.throwsDone\" (scoreEntered)=\"scoreEntered($event)\" (scoreReverted)=\"scoreReverted()\"></app-dart-board>\n  </div>\n  <div class=\"col-sm-6 no-padding no-border\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"no-margin\">\n        {{'page.dartScoreBoard.setup.playerList' | translate}}\n      </h3>\n      <p *ngIf=\"dartGameData.settings.isGameActive\" [innerHTML]=\"'page.dartScoreBoard.setup.playerLis.hint' | translate: getPlayerObject()\">\n      </p>\n    </div>\n    <ng-container *ngIf=\"(dartGameData.settings.isGameActive || dartGameData.legFinished)  && dartGameData.currentPlayerMapKeys\">\n      <div class=\"col-xs-12\" *ngFor=\"let player of dartGameData.currentPlayerMapKeys\">\n        <div class=\"no-padding col-xs-12 {{ isPlayerActive(player) ? 'player-active' : 'player-inactive'}}\">\n          <app-score-panel [playerName]=\"player\" [legData]=\"dartGameData.gameData.get(player).currentLeg\"\n                           [requiredScore]=\"dartGameData.settings.requiredScore\"\n                           [isActive]=\"isPlayerActive(player)\"></app-score-panel>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"alert-warning col-xs-12 game-over-panel\" *ngIf=\"getFirstFinisher() && !dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.winner' | translate: {'player': getFirstFinisher()}\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"alert-success col-xs-12 game-over-panel\" *ngIf=\"dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.finished' | translate: {'player': getFirstFinisher()}\">\n    {{'page.dartScoreBoard.game.finished' | translate}}\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: [".no-padding{padding:0}.game-over-panel{border-radius:5px;margin-top:1rem;text-align:center;padding:1rem;border:1px solid}.margin-top{margin-top:1rem}.base-padding{padding:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBUTFELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFLN0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDOUMsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTs7a0JBQ25HLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RixJQUFJLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O3NCQUNyRCxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFD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QkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDakQ7U0FDRjtJQUNILENBQUM7OztZQTNMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNDNFQUEwQzs7YUFFM0M7Ozs7WUFUTyxZQUFZOzs7MkJBWWpCLEtBQUs7Ozs7SUFBTiwwQ0FDa0M7Ozs7O0lBRXRCLDBDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2NvcmVFbnRyeX0gZnJvbSAnLi4vY2xhc3Nlcy9zY29yZS1lbnRyeSc7XG5pbXBvcnQge0RhcnRHYW1lRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9kYXJ0LWdhbWUtZGF0YSc7XG5pbXBvcnQge1BsYXllckRhdGF9IGZyb20gJy4uL2NsYXNzZXMvcGxheWVyLWRhdGEnO1xuaW1wb3J0IHtTY29yZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4uL2NsYXNzZXMvZ2FtZS1tb2Rlcyc7XG5pbXBvcnQge1Njb3JlVmFsaWRhdG9yfSBmcm9tICcuLi9jbGFzc2VzL3Njb3JlLXZhbGlkYXRvcic7XG5pbXBvcnQge3VuZXNjYXBlfSBmcm9tICdxdWVyeXN0cmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1nYW1lLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbWUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHYW1lUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXJ0R2FtZURhdGE6IERhcnRHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjb3JlU2VydmljZTogU2NvcmVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBzY29yZUVudGVyZWQoZXZlbnQ6IFNjb3JlRW50cnkpIHtcbiAgICBpZiAodGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEgJiYgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciAmJiAhdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcgJiYgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMpIHtcbiAgICAgICAgY29uc3Qgc2NvcmVWYWxpZCA9IHRoaXMuc2NvcmVTZXJ2aWNlLmlzU2NvcmVWYWxpZChjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3JlcywgZXZlbnQsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmdhbWVNb2RlIGFzIEdhbWVNb2RlcywgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucmVxdWlyZWRTY29yZSk7XG4gICAgICAgIGV2ZW50LmlzVmFsaWQgPSBzY29yZVZhbGlkID09PSBTY29yZVZhbGlkYXRvci5WQUxJRDtcbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMucHVzaChldmVudCk7XG4gICAgICAgIGlmIChzY29yZVZhbGlkID09PSBTY29yZVZhbGlkYXRvci5TRVRfSU5WQUxJRCkge1xuICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZVNldChzY29yZVZhbGlkLCBjdXJyZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2NvcmVTZXJ2aWNlLmdldFBlbmRpbmdTY29yZXMoY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gMSwgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMsIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUpID09PSAwKSB7XG4gICAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnRvdGFsVGhyb3dOdW1iZXJJbkxlZyA9IHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmU7XG4gICAgICAgICAgdGhpcy5zZWxlY3ROZXh0UGxheWVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TmV4dFBsYXllcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNjb3JlUmV2ZXJ0ZWQoKSB7XG4gICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhICYmIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpIHtcbiAgICAgIGxldCBjdXJyZW50RGF0YSA9IHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICAgIGlmIChjdXJyZW50RGF0YS5jdXJyZW50TGVnICYmIGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzKSB7XG4gICAgICAgIGNvbnN0IHRocm93c0xlZnRDb3VudCA9IDMgLSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggJSAzO1xuICAgICAgICBpZiAodGhyb3dzTGVmdENvdW50ID09PSAzKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RQcmV2aW91c05vdEZpbmlzaGVkUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja0lmRmluaXNoZWQoMSk7XG4gICAgICAgIGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgICAgICBsZXQgdG9EZWxldGVkUm93cyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGNvbnN0IHNjb3JlID0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXNbaV07XG4gICAgICAgICAgdG9EZWxldGVkUm93cyArPSAxO1xuICAgICAgICAgIGlmIChzY29yZS50eXBlICE9PSAwKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMuc3BsaWNlKGN1cnJlbnREYXRhLmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aCAtIHRvRGVsZXRlZFJvd3MsIHRvRGVsZXRlZFJvd3MpO1xuXG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmUgLT0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCkge1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gW107XG4gICAgY29uc3QgcGxheWVyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFBsYXllckRhdGE+KCk7XG4gICAgbGV0IGZpcnN0UGxheWVyQXNzaWduZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzKSB7XG4gICAgICBwbGF5ZXJNYXAuc2V0KHBsYXllciwgbmV3IFBsYXllckRhdGEoKSk7XG4gICAgICBpZiAoIWZpcnN0UGxheWVyQXNzaWduZWQpIHtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHBsYXllcjtcbiAgICAgICAgZmlyc3RQbGF5ZXJBc3NpZ25lZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmUgPSAwO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhID0gcGxheWVyTWFwO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMgPSBBcnJheS5mcm9tKHBsYXllck1hcC5rZXlzKCkpO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgaXNQbGF5ZXJBY3RpdmUocGxheWVyOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPT09IHBsYXllcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXJPYmplY3QoKSB7XG4gICAgY29uc3QgZGFydENvdW50ID0gMyAtIHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhLmdldCh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggJSAzO1xuICAgIHJldHVybiB7J25hbWUnOiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyLCAnZGFydENvdW50JzogZGFydENvdW50fTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaXJzdEZpbmlzaGVyKCkge1xuICAgIGNvbnN0IGZpbmlzaGVyQXJyYXkgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cykge1xuICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQocGxheWVyKTtcbiAgICAgIGlmIChjdXJyZW50RGF0YS5jdXJyZW50TGVnLmZpbmlzaGVkVGltZSkge1xuICAgICAgICBmaW5pc2hlckFycmF5LnB1c2goeydwbGF5ZXInOiBwbGF5ZXIsICdmaW5pc2hUaW1lJzogY3VycmVudERhdGEuY3VycmVudExlZy5maW5pc2hlZFRpbWV9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbmlzaGVyQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgZmlyc3RGaW5pc2hlciA9IGZpbmlzaGVyQXJyYXlbMF07XG4gICAgZm9yIChjb25zdCBmaW5pc2hlciBvZiBmaW5pc2hlckFycmF5KSB7XG4gICAgICBpZiAoZmluaXNoZXIuZmluaXNoVGltZSA8IGZpcnN0RmluaXNoZXIuZmluaXNoVGltZSkge1xuICAgICAgICBmaXJzdEZpbmlzaGVyID0gZmluaXNoZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaXJzdEZpbmlzaGVyLnBsYXllcjtcbiAgfVxuXG4gIHByaXZhdGUgaW52YWxpZGF0ZVNldChzY29yZVZhbGlkOiBTY29yZVZhbGlkYXRvciwgY3VycmVudERhdGE6IFBsYXllckRhdGEgfCB1bmRlZmluZWQpIHtcbiAgICBsZXQgbnVtYmVyT2ZUaHJvd3NEb25lID0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoICUgMztcbiAgICBpZiAobnVtYmVyT2ZUaHJvd3NEb25lID09PSAwKSB7XG4gICAgICBudW1iZXJPZlRocm93c0RvbmUgPSAzO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMubGVuZ3RoIC0gMTsgaSA+PSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnNjb3Jlcy5sZW5ndGggLSBudW1iZXJPZlRocm93c0RvbmU7IGktLSkge1xuICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXNbaV0uaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHRocm93c0xlZnRDb3VudCA9IDMgLSBudW1iZXJPZlRocm93c0RvbmU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHJvd3NMZWZ0Q291bnQ7IGkrKykge1xuICAgICAgY29uc3QgZHVtbXlTY29yZSA9IG5ldyBTY29yZUVudHJ5KCk7XG4gICAgICBkdW1teVNjb3JlLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIGR1bW15U2NvcmUudHlwZSA9IDA7XG4gICAgICBkdW1teVNjb3JlLnRvdGFsID0gMDtcbiAgICAgIGR1bW15U2NvcmUuZmllbGQgPSAwO1xuICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy5zY29yZXMucHVzaChkdW1teVNjb3JlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFByZXZpb3VzTm90RmluaXNoZWRQbGF5ZXIoaXRlcmF0aW9uPzogbnVtYmVyKSB7XG4gICAgaWYgKCFpdGVyYXRpb24pIHtcbiAgICAgIGl0ZXJhdGlvbiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZXJhdGlvbiArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpbmRleE9mQWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycy5pbmRleE9mKHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgIGlmIChpbmRleE9mQWN0aXZlUGxheWVyID09PSAwKSB7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVyc1t0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5wbGF5ZXJzLmxlbmd0aCAtIDFdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVyc1tpbmRleE9mQWN0aXZlUGxheWVyIC0gMV07XG4gICAgfVxuICAgIHRoaXMuY2hlY2tJZkZpbmlzaGVkKGl0ZXJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrSWZGaW5pc2hlZChpdGVyYXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpO1xuICAgIGlmIChjdXJyZW50RGF0YS5jdXJyZW50TGVnLmZpbmlzaGVkVGltZSkge1xuICAgICAgaWYgKHRoaXMuZGFydEdhbWVEYXRhLnRocm93c0RvbmUgLSAxID09PSBjdXJyZW50RGF0YS5jdXJyZW50TGVnLnRvdGFsVGhyb3dOdW1iZXJJbkxlZykge1xuICAgICAgICBjdXJyZW50RGF0YS5jdXJyZW50TGVnLmZpbmlzaGVkVGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY3VycmVudERhdGEuY3VycmVudExlZy50b3RhbFRocm93TnVtYmVySW5MZWcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmlzR2FtZUFjdGl2ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlcmF0aW9uIDw9IHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0UHJldmlvdXNOb3RGaW5pc2hlZFBsYXllcihpdGVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3ROZXh0UGxheWVyKGl0ZXJhdGlvbj86IG51bWJlcikge1xuICAgIGlmICghaXRlcmF0aW9uKSB7XG4gICAgICBpdGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRpb24gKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXhPZkFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMuaW5kZXhPZih0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKTtcbiAgICBpZiAoaW5kZXhPZkFjdGl2ZVBsYXllciA9PT0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVyc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllciA9IHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnNbaW5kZXhPZkFjdGl2ZVBsYXllciArIDFdO1xuICAgIH1cbiAgICBjb25zdCBuZXdQbGF5ZXJTY29yZXMgPSB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudEFjdGl2ZVBsYXllcikuY3VycmVudExlZy5zY29yZXM7XG4gICAgaWYgKHRoaXMuc2NvcmVTZXJ2aWNlLmdldFBlbmRpbmdTY29yZXMobmV3UGxheWVyU2NvcmVzLmxlbmd0aCAtIDEsIG5ld1BsYXllclNjb3JlcywgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucmVxdWlyZWRTY29yZSkgPT09IDApIHtcbiAgICAgIGlmIChpdGVyYXRpb24gPD0gdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TmV4dFBsYXllcihpdGVyYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19