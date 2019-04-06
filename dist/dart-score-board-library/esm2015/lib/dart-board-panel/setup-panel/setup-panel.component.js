/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameSettings } from '../classes/game-setttings';
import { GameModes } from '../classes/game-modes';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class SetupPanelComponent {
    constructor() {
        this.gameStarted = new EventEmitter();
        this.newPlayerName = '';
        this.showGameCancelWarning = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isCustomizedRequiredScore = false;
        if (this.gameSettings.requiredScore) {
            this.requiredScoreModel = this.gameSettings.requiredScore;
        }
    }
    /**
     * @return {?}
     */
    getGameModes() {
        /** @type {?} */
        const modes = [];
        /** @type {?} */
        const allModes = Object.keys(GameModes.valueOf());
        for (const mode of allModes.slice(0, allModes.length / 2)) {
            modes.push(parseInt(mode, 10));
        }
        return modes;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getGameModeValue(key) {
        return GameModes.valueOf()[key];
    }
    /**
     * @return {?}
     */
    getConvertedRequiredScore() {
        if (this.isCustomizedRequiredScore) {
            return -1;
        }
        return this.gameSettings.requiredScore;
    }
    /**
     * @param {?} score
     * @return {?}
     */
    setRequiredScore(score) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.requiredScore = score;
        this.requiredScoreModel = score;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setGameMode(mode) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.gameMode = mode;
    }
    /**
     * @return {?}
     */
    doesPlayerExists() {
        return this.gameSettings.players.indexOf(this.newPlayerName.trim()) > -1;
    }
    /**
     * @return {?}
     */
    addNewPlayer() {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.newPlayerName.trim() !== '' && !this.doesPlayerExists()) {
            this.gameSettings.players.push(this.newPlayerName);
            this.newPlayerName = '';
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removePlayer(name) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (name && name.trim() !== '') {
            /** @type {?} */
            const index = this.gameSettings.players.indexOf(name);
            if (index > -1) {
                this.gameSettings.players.splice(index, 1);
            }
        }
    }
    /**
     * @return {?}
     */
    isGameReady() {
        return this.gameSettings &&
            this.gameSettings.requiredScore > 0 &&
            this.gameSettings.players.length > 0 &&
            this.gameSettings.gameMode > -1;
    }
    /**
     * @return {?}
     */
    startGame() {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.isGameReady()) {
            this.gameStarted.emit();
        }
    }
    /**
     * @return {?}
     */
    getGameCancelWarningClass() {
        return this.showGameCancelWarning ? 'display-warning' : 'hide-warning';
    }
    /**
     * @return {?}
     */
    cancelGame() {
        this.showGameCancelWarning = false;
        this.gameSettings.isGameActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        moveItemInArray(this.gameSettings.players, event.previousIndex, event.currentIndex);
    }
}
SetupPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-setup-panel',
                template: "<div class=\"base-padding\">\n  <h3>\n    {{'page.dartScoreBoard.setup.title' | translate}}\n  </h3>\n</div>\n<div class=\"setup-panel base-padding\">\n  <div class=\"game-running-container width-100\" *ngIf=\"gameSettings.isGameActive\">\n    <div class=\"width-100 game-running-hint no-margin-bottom\" *ngIf=\"!showGameCancelWarning\">\n      <div class=\"message-container alert-warning\">\n        {{'page.dartScoreBoard.setup.gameInProgress.hint' | translate}}\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"showGameCancelWarning = true\">\n          {{'page.dartScoreBoard.setup.gameInProgress.cancelQuestion' | translate}}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"width-100 game-cancel-question alert alert-danger no-margin-bottom\" *ngIf=\"showGameCancelWarning\">\n      <div class=\"message-container alert-danger\">\n        {{'page.dartScoreBoard.setup.cancelGame.hint' | translate}}\n        <button class=\"btn btn-success warning-button-styling\" (click)=\"showGameCancelWarning = false;\">\n          {{'page.dartScoreBoard.setup.cancelGame.cancel' | translate}}\n        </button>\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"cancelGame()\">\n          {{'page.dartScoreBoard.setup.cancelGame.confirm' | translate}}\n        </button>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"col-sm-6 no-padding\">\n    <div class=\"config-group radio-button-group-game-mode\">\n      <h4>\n        {{'page.dartScoreBoard.setup.gameMode' | translate}}\n      </h4>\n      <div *ngFor=\"let gameMode of getGameModes()\">\n        <div class=\"width-100\" (click)=\"setGameMode(gameMode)\">\n          <input type=\"radio\" [value]=\"gameMode\" name=\"gameMode\" [(ngModel)]=\"gameSettings.gameMode\">\n          {{'page.dartScoreBoard.setup.gameMode.' + getGameModeValue(gameMode) | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 no-padding\">\n    <div class=\"config-group radio-button-group-required-score\">\n      <h4>\n        {{'page.dartScoreBoard.setup.requiredScore' | translate}}\n      </h4>\n\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(901)\">\n        <input type=\"radio\" [value]=\"901\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 901\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(701)\">\n        <input type=\"radio\" [value]=\"701\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 701\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(501)\">\n        <input type=\"radio\" [value]=\"501\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 501\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(301)\">\n        <input type=\"radio\" [value]=\"301\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 301\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = true;\">\n        <input type=\"radio\" [value]=\"true\" name=\"requiredScore\" [(ngModel)]=\"isCustomizedRequiredScore\">\n        {{'page.dartScoreBoard.setup.settings.customized' | translate}}\n        <input *ngIf=\"isCustomizedRequiredScore\" class=\"custom-input\" type=\"number\" name=\"requiredScoreInput\"\n               [(ngModel)]=\"gameSettings.requiredScore\" [min]=\"101\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12 no-padding\">\n    <div class=\"config-group\">\n      <h4>\n        {{'page.dartScoreBoard.setup.configure.players' | translate}}\n      </h4>\n      <hr>\n      <h5>\n        {{'page.dartScoreBoard.setup.player.add.title' | translate}}\n      </h5>\n      <button class=\"btn btn-primary add-player-button\"\n              [disabled]=\"!newPlayerName || newPlayerName.trim() === '' || doesPlayerExists()\"\n              (click)=\"addNewPlayer()\">{{'page.dartScoreBoard.setup.player.add' | translate}}\n      </button>\n      <input class=\"player-input form-control\" type=\"text\" [(ngModel)]=\"newPlayerName\"\n             placeholder=\"{{'page.dartScoreBoard.setup.player.add.placeholder' | translate}}\">\n      <p class=\"alert alert-warning no-margin-bottom player-double-alert\" *ngIf=\"doesPlayerExists()\">\n        {{'page.dartScoreBoard.setup.playerExists.hint' | translate}}\n      </p>\n      <div class=\"clearfix\"></div>\n      <hr>\n      <h5>\n        {{'page.dartScoreBoard.setup.player.order.title' | translate}}\n      </h5>\n      <div cdkDropList *ngIf=\"gameSettings.players && gameSettings.players.length > 0; else showNoPlayersHint\" (cdkDropListDropped)=\"drop($event)\">\n        <button class=\"btn btn-primary player-display\" *ngFor=\"let player of gameSettings.players\" cdkDrag>\n          <img class=\"drag-and-drop-icon\" (click)=\"removePlayer(player)\"\n               src=\"/assets/pictures/tools/dart-score-board/drag-and-drop.svg\">\n          {{player}}\n          <img class=\"delete-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/tools/dart-score-board/trashbin.svg\">\n        </button>\n      </div>\n\n      <ng-template #showNoPlayersHint>\n        <div class=\"width-100 alert alert-danger no-margin-bottom\">\n          {{'page.dartScoreBoard.setup.players.notFound' | translate}}\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"col-sm-12 no-padding\">\n    <div class=\"config-group\">\n      <button class=\"btn btn-success width-100\" [disabled]=\"!isGameReady()\" (click)=\"startGame()\">\n        {{'page.dartScoreBoard.setup.startGame' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n",
                styles: [".setup-panel{position:relative}.config-group{padding:.5rem;border-radius:5px;margin-bottom:.5rem;background-color:#adadad}@media (min-width:768px){.radio-button-group-game-mode{margin-right:.5rem;height:25rem}.radio-button-group-required-score{height:25rem}}.custom-input{margin-left:.5rem;height:18px;width:50px}.width-100{width:100%}.minimal-advantage{margin-top:1rem}.no-padding{padding:0}.player-display{padding:.5rem;border-radius:5px;margin-bottom:.5rem;text-align:center;width:100%}.add-player-button{width:38%;float:right;margin-bottom:.5rem}.player-input{max-width:60%;margin-right:2%}.player-double-alert{margin-top:.5rem}.clearfix{clear:both}.delete-icon{width:20px;float:right}.drag-and-drop-icon{width:20px;float:left}.no-margin-bottom{margin-bottom:0}.game-running-container{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.game-cancel-question,.game-running-hint{position:absolute;height:100%;background-color:rgba(0,0,0,.7);text-align:center;z-index:2}.warning-button-styling{margin-left:1rem}.message-container{bottom:1rem;position:absolute;left:1rem;right:1rem;padding:1rem;border-radius:5px}.base-padding{padding-left:5px}"]
            }] }
];
/** @nocollapse */
SetupPanelComponent.ctorParameters = () => [];
SetupPanelComponent.propDecorators = {
    gameSettings: [{ type: Input }],
    gameStarted: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SetupPanelComponent.prototype.gameSettings;
    /** @type {?} */
    SetupPanelComponent.prototype.gameStarted;
    /** @type {?} */
    SetupPanelComponent.prototype.isCustomizedRequiredScore;
    /** @type {?} */
    SetupPanelComponent.prototype.requiredScoreModel;
    /** @type {?} */
    SetupPanelComponent.prototype.newPlayerName;
    /** @type {?} */
    SetupPanelComponent.prototype.showGameCancelWarning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2V0dXAtcGFuZWwvc2V0dXAtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBT3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFhOUI7UUFQTyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJakMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBR3JDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7SUFFTSxZQUFZOztjQUNYLEtBQUssR0FBRyxFQUFFOztjQUNWLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekQsS0FBSyxDQUFDLElBQUksQ0FBQyxR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LENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsS0FBNEI7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7O1lBeEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiwwdkxBQTJDOzthQUU1Qzs7Ozs7MkJBR0UsS0FBSzswQkFHTCxNQUFNOzs7O0lBSFAsMkNBQ2tDOztJQUVsQywwQ0FDd0M7O0lBRXhDLHdEQUEwQzs7SUFDMUMsaURBQWtDOztJQUNsQyw0Q0FBMEI7O0lBQzFCLG9EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLXNldHR0aW5ncyc7XG5pbXBvcnQge0dhbWVNb2Rlc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZXR1cC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR1cC1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NldHVwLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR1cFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2FtZVNldHRpbmdzOiBHYW1lU2V0dGluZ3M7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBnYW1lU3RhcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZTogYm9vbGVhbjtcbiAgcHVibGljIHJlcXVpcmVkU2NvcmVNb2RlbDogbnVtYmVyO1xuICBwdWJsaWMgbmV3UGxheWVyTmFtZSA9ICcnO1xuICBwdWJsaWMgc2hvd0dhbWVDYW5jZWxXYXJuaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQ3VzdG9taXplZFJlcXVpcmVkU2NvcmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZSkge1xuICAgICAgdGhpcy5yZXF1aXJlZFNjb3JlTW9kZWwgPSB0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRHYW1lTW9kZXMoKSB7XG4gICAgY29uc3QgbW9kZXMgPSBbXTtcbiAgICBjb25zdCBhbGxNb2RlcyA9IE9iamVjdC5rZXlzKEdhbWVNb2Rlcy52YWx1ZU9mKCkpO1xuICAgIGZvciAoY29uc3QgbW9kZSBvZiBhbGxNb2Rlcy5zbGljZSgwLCBhbGxNb2Rlcy5sZW5ndGggLyAyKSkge1xuICAgICAgbW9kZXMucHVzaChwYXJzZUludChtb2RlLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiBtb2RlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRHYW1lTW9kZVZhbHVlKGtleTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIEdhbWVNb2Rlcy52YWx1ZU9mKClba2V5XTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb252ZXJ0ZWRSZXF1aXJlZFNjb3JlKCkge1xuICAgIGlmICh0aGlzLmlzQ3VzdG9taXplZFJlcXVpcmVkU2NvcmUpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmU7XG4gIH1cblxuICBwdWJsaWMgc2V0UmVxdWlyZWRTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlID0gc2NvcmU7XG4gICAgdGhpcy5yZXF1aXJlZFNjb3JlTW9kZWwgPSBzY29yZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRHYW1lTW9kZShtb2RlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2FtZVNldHRpbmdzLmdhbWVNb2RlID0gbW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBkb2VzUGxheWVyRXhpc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YodGhpcy5uZXdQbGF5ZXJOYW1lLnRyaW0oKSkgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdQbGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5uZXdQbGF5ZXJOYW1lLnRyaW0oKSAhPT0gJycgJiYgIXRoaXMuZG9lc1BsYXllckV4aXN0cygpKSB7XG4gICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLnB1c2godGhpcy5uZXdQbGF5ZXJOYW1lKTtcbiAgICAgIHRoaXMubmV3UGxheWVyTmFtZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVQbGF5ZXIobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobmFtZSAmJiBuYW1lLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nYW1lU2V0dGluZ3MucGxheWVycy5pbmRleE9mKG5hbWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5nYW1lU2V0dGluZ3MucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0dhbWVSZWFkeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lU2V0dGluZ3MgJiZcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmUgPiAwICYmXG4gICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLmxlbmd0aCA+IDAgJiZcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLmdhbWVNb2RlID4gLTE7XG4gIH1cblxuICBwdWJsaWMgc3RhcnRHYW1lKCkge1xuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNHYW1lUmVhZHkoKSkge1xuICAgICAgdGhpcy5nYW1lU3RhcnRlZC5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEdhbWVDYW5jZWxXYXJuaW5nQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0dhbWVDYW5jZWxXYXJuaW5nID8gJ2Rpc3BsYXktd2FybmluZycgOiAnaGlkZS13YXJuaW5nJztcbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxHYW1lKCkge1xuICAgIHRoaXMuc2hvd0dhbWVDYW5jZWxXYXJuaW5nID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5nYW1lU2V0dGluZ3MucGxheWVycywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIl19