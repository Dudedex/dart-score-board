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
                template: "<div class=\"base-padding\">\r\n  <h3>\r\n    {{'page.dartScoreBoard.setup.title' | translate}}\r\n  </h3>\r\n</div>\r\n<div class=\"setup-panel\">\r\n  <div class=\"game-running-container width-100\" *ngIf=\"gameSettings.isGameActive\">\r\n    <div class=\"width-100 game-running-hint no-margin-bottom\" *ngIf=\"!showGameCancelWarning\">\r\n      <div class=\"message-container alert-warning\">\r\n        {{'page.dartScoreBoard.setup.gameInProgress.hint' | translate}}\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"showGameCancelWarning = true\">\r\n          {{'page.dartScoreBoard.setup.gameInProgress.cancelQuestion' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"width-100 game-cancel-question alert alert-danger no-margin-bottom\" *ngIf=\"showGameCancelWarning\">\r\n      <div class=\"message-container alert-danger\">\r\n        {{'page.dartScoreBoard.setup.cancelGame.hint' | translate}}\r\n        <button class=\"btn btn-success warning-button-styling\" (click)=\"showGameCancelWarning = false;\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.cancel' | translate}}\r\n        </button>\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"cancelGame()\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.confirm' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.gameMode' | translate}}\r\n      </h4>\r\n      <div *ngFor=\"let gameMode of getGameModes()\">\r\n        <div class=\"width-100\" (click)=\"setGameMode(gameMode)\">\r\n          <input type=\"radio\" [value]=\"gameMode\" name=\"gameMode\" [(ngModel)]=\"gameSettings.gameMode\">\r\n          {{'page.dartScoreBoard.setup.gameMode.' + getGameModeValue(gameMode) | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.requiredScore' | translate}}\r\n      </h4>\r\n\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(901)\">\r\n        <input type=\"radio\" [value]=\"901\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 901\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(701)\">\r\n        <input type=\"radio\" [value]=\"701\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 701\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(501)\">\r\n        <input type=\"radio\" [value]=\"501\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 501\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(301)\">\r\n        <input type=\"radio\" [value]=\"301\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 301\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = true;\">\r\n        <input type=\"radio\" [value]=\"true\" name=\"requiredScore\" [(ngModel)]=\"isCustomizedRequiredScore\">\r\n        {{'page.dartScoreBoard.setup.settings.customized' | translate}}\r\n        <input *ngIf=\"isCustomizedRequiredScore\" class=\"custom-input\" type=\"number\" name=\"requiredScoreInput\"\r\n               [(ngModel)]=\"gameSettings.requiredScore\" [min]=\"101\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.configure.players' | translate}}\r\n      </h4>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.add.title' | translate}}\r\n      </h5>\r\n      <button class=\"btn btn-primary add-player-button\"\r\n              [disabled]=\"!newPlayerName || newPlayerName.trim() === '' || doesPlayerExists()\"\r\n              (click)=\"addNewPlayer()\">{{'page.dartScoreBoard.setup.player.add' | translate}}\r\n      </button>\r\n      <input class=\"player-input form-control\" type=\"text\" [(ngModel)]=\"newPlayerName\"\r\n             placeholder=\"{{'page.dartScoreBoard.setup.player.add.placeholder' | translate}}\">\r\n      <p class=\"alert alert-warning no-margin-bottom player-double-alert\" *ngIf=\"doesPlayerExists()\">\r\n        {{'page.dartScoreBoard.setup.playerExists.hint' | translate}}\r\n      </p>\r\n      <div class=\"clearfix\"></div>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.order.title' | translate}}\r\n      </h5>\r\n      <div cdkDropList *ngIf=\"gameSettings.players && gameSettings.players.length > 0; else showNoPlayersHint\"\r\n           class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <button class=\"btn btn-primary player-display\" *ngFor=\"let player of gameSettings.players\" cdkDrag>\r\n          <img class=\"drag-and-drop-icon\" (click)=\"removePlayer(player)\"\r\n               src=\"/assets/pictures/tools/dart-score-board/drag-and-drop.svg\">\r\n          {{player}}\r\n          <img class=\"delete-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/tools/dart-score-board/trashbin.svg\">\r\n        </button>\r\n      </div>\r\n\r\n      <ng-template #showNoPlayersHint>\r\n        <div class=\"width-100 alert alert-danger no-margin-bottom\">\r\n          {{'page.dartScoreBoard.setup.players.notFound' | translate}}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <button class=\"btn btn-success width-100\" [disabled]=\"!isGameReady()\" (click)=\"startGame()\">\r\n        {{'page.dartScoreBoard.setup.startGame' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n",
                styles: [".setup-panel{position:relative}.config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.radio-button-group{height:21rem}.custom-input{margin-left:.5rem;height:18px;width:50px}.width-100{width:100%}.minimal-advantage{margin-top:1rem}.no-padding{padding:0}.player-display{padding:.5rem;border-radius:5px;margin-bottom:.5rem;text-align:center;width:100%}.add-player-button{width:38%;float:right;margin-bottom:.5rem}.player-input{max-width:60%;margin-right:2%}.player-double-alert{margin-top:.5rem}.clearfix{clear:both}.delete-icon{width:20px;float:right}.drag-and-drop-icon{width:20px;float:left}.no-margin-bottom{margin-bottom:0}.game-running-container{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.game-cancel-question,.game-running-hint{position:absolute;height:100%;background-color:rgba(0,0,0,.7);text-align:center;z-index:2}.warning-button-styling{margin-left:1rem}.message-container{bottom:1rem;position:absolute;left:1rem;right:1rem;padding:1rem;border-radius:5px}.base-padding{padding-left:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2V0dXAtcGFuZWwvc2V0dXAtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDaEQsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBT3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFhOUI7UUFQTyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJakMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBR3JDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztTQUMzRDtJQUNILENBQUM7Ozs7SUFFTSxZQUFZOztjQUNYLEtBQUssR0FBRyxFQUFFOztjQUNWLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekQsS0FBSyxDQUFDLElBQUksQ0FBQyxR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LENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsS0FBNEI7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7O1lBeEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixxK0xBQTJDOzthQUU1Qzs7Ozs7MkJBR0UsS0FBSzswQkFHTCxNQUFNOzs7O0lBSFAsMkNBQ2tDOztJQUVsQywwQ0FDd0M7O0lBRXhDLHdEQUEwQzs7SUFDMUMsaURBQWtDOztJQUNsQyw0Q0FBMEI7O0lBQzFCLG9EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tICcuLi9jbGFzc2VzL2dhbWUtc2V0dHRpbmdzJztcclxuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4uL2NsYXNzZXMvZ2FtZS1tb2Rlcyc7XHJcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zZXR1cC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHVwLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZXR1cC1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHVwUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBnYW1lU2V0dGluZ3M6IEdhbWVTZXR0aW5ncztcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGdhbWVTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwdWJsaWMgaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZTogYm9vbGVhbjtcclxuICBwdWJsaWMgcmVxdWlyZWRTY29yZU1vZGVsOiBudW1iZXI7XHJcbiAgcHVibGljIG5ld1BsYXllck5hbWUgPSAnJztcclxuICBwdWJsaWMgc2hvd0dhbWVDYW5jZWxXYXJuaW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmlzQ3VzdG9taXplZFJlcXVpcmVkU2NvcmUgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlKSB7XHJcbiAgICAgIHRoaXMucmVxdWlyZWRTY29yZU1vZGVsID0gdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRHYW1lTW9kZXMoKSB7XHJcbiAgICBjb25zdCBtb2RlcyA9IFtdO1xyXG4gICAgY29uc3QgYWxsTW9kZXMgPSBPYmplY3Qua2V5cyhHYW1lTW9kZXMudmFsdWVPZigpKTtcclxuICAgIGZvciAoY29uc3QgbW9kZSBvZiBhbGxNb2Rlcy5zbGljZSgwLCBhbGxNb2Rlcy5sZW5ndGggLyAyKSkge1xyXG4gICAgICBtb2Rlcy5wdXNoKHBhcnNlSW50KG1vZGUsIDEwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vZGVzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEdhbWVNb2RlVmFsdWUoa2V5OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBHYW1lTW9kZXMudmFsdWVPZigpW2tleV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29udmVydGVkUmVxdWlyZWRTY29yZSgpIHtcclxuICAgIGlmICh0aGlzLmlzQ3VzdG9taXplZFJlcXVpcmVkU2NvcmUpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UmVxdWlyZWRTY29yZShzY29yZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmUgPSBzY29yZTtcclxuICAgIHRoaXMucmVxdWlyZWRTY29yZU1vZGVsID0gc2NvcmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0R2FtZU1vZGUobW9kZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZVNldHRpbmdzLmdhbWVNb2RlID0gbW9kZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkb2VzUGxheWVyRXhpc3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMuaW5kZXhPZih0aGlzLm5ld1BsYXllck5hbWUudHJpbSgpKSA+IC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZE5ld1BsYXllcigpIHtcclxuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubmV3UGxheWVyTmFtZS50cmltKCkgIT09ICcnICYmICF0aGlzLmRvZXNQbGF5ZXJFeGlzdHMoKSkge1xyXG4gICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLnB1c2godGhpcy5uZXdQbGF5ZXJOYW1lKTtcclxuICAgICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUGxheWVyKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSAmJiBuYW1lLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU2V0dGluZ3MucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNHYW1lUmVhZHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lU2V0dGluZ3MgJiZcclxuICAgICAgdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZSA+IDAgJiZcclxuICAgICAgdGhpcy5nYW1lU2V0dGluZ3MucGxheWVycy5sZW5ndGggPiAwICYmXHJcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLmdhbWVNb2RlID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRHYW1lKCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0dhbWVSZWFkeSgpKSB7XHJcbiAgICAgIHRoaXMuZ2FtZVN0YXJ0ZWQuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEdhbWVDYW5jZWxXYXJuaW5nQ2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93R2FtZUNhbmNlbFdhcm5pbmcgPyAnZGlzcGxheS13YXJuaW5nJyA6ICdoaWRlLXdhcm5pbmcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbmNlbEdhbWUoKSB7XHJcbiAgICB0aGlzLnNob3dHYW1lQ2FuY2VsV2FybmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gIH1cclxufVxyXG4iXX0=