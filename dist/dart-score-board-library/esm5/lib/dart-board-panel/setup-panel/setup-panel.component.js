/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameSettings } from '../classes/game-setttings';
import { GameModes } from '../classes/game-modes';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var SetupPanelComponent = /** @class */ (function () {
    function SetupPanelComponent() {
        this.gameStarted = new EventEmitter();
        this.newPlayerName = '';
        this.showGameCancelWarning = false;
    }
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isCustomizedRequiredScore = false;
        if (this.gameSettings.requiredScore) {
            this.requiredScoreModel = this.gameSettings.requiredScore;
        }
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.getGameModes = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var modes = [];
        /** @type {?} */
        var allModes = Object.keys(GameModes.valueOf());
        try {
            for (var _b = tslib_1.__values(allModes.slice(0, allModes.length / 2)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var mode = _c.value;
                modes.push(parseInt(mode, 10));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return modes;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SetupPanelComponent.prototype.getGameModeValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return GameModes.valueOf()[key];
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.getConvertedRequiredScore = /**
     * @return {?}
     */
    function () {
        if (this.isCustomizedRequiredScore) {
            return -1;
        }
        return this.gameSettings.requiredScore;
    };
    /**
     * @param {?} score
     * @return {?}
     */
    SetupPanelComponent.prototype.setRequiredScore = /**
     * @param {?} score
     * @return {?}
     */
    function (score) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.requiredScore = score;
        this.requiredScoreModel = score;
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    SetupPanelComponent.prototype.setGameMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.gameMode = mode;
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.doesPlayerExists = /**
     * @return {?}
     */
    function () {
        return this.gameSettings.players.indexOf(this.newPlayerName.trim()) > -1;
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.addNewPlayer = /**
     * @return {?}
     */
    function () {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.newPlayerName.trim() !== '' && !this.doesPlayerExists()) {
            this.gameSettings.players.push(this.newPlayerName);
            this.newPlayerName = '';
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    SetupPanelComponent.prototype.removePlayer = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (name && name.trim() !== '') {
            /** @type {?} */
            var index = this.gameSettings.players.indexOf(name);
            if (index > -1) {
                this.gameSettings.players.splice(index, 1);
            }
        }
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.isGameReady = /**
     * @return {?}
     */
    function () {
        return this.gameSettings &&
            this.gameSettings.requiredScore > 0 &&
            this.gameSettings.players.length > 0 &&
            this.gameSettings.gameMode > -1;
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.startGame = /**
     * @return {?}
     */
    function () {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.isGameReady()) {
            this.gameStarted.emit();
        }
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.getGameCancelWarningClass = /**
     * @return {?}
     */
    function () {
        return this.showGameCancelWarning ? 'display-warning' : 'hide-warning';
    };
    /**
     * @return {?}
     */
    SetupPanelComponent.prototype.cancelGame = /**
     * @return {?}
     */
    function () {
        this.showGameCancelWarning = false;
        this.gameSettings.isGameActive = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SetupPanelComponent.prototype.drop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        moveItemInArray(this.gameSettings.players, event.previousIndex, event.currentIndex);
    };
    SetupPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-setup-panel',
                    template: "<div class=\"base-padding\">\n  <h3>\n    {{'page.dartScoreBoard.setup.title' | translate}}\n  </h3>\n</div>\n<div class=\"setup-panel base-padding\">\n  <div class=\"game-running-container width-100\" *ngIf=\"gameSettings.isGameActive\">\n    <div class=\"width-100 game-running-hint no-margin-bottom\" *ngIf=\"!showGameCancelWarning\">\n      <div class=\"message-container alert-warning\">\n        {{'page.dartScoreBoard.setup.gameInProgress.hint' | translate}}\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"showGameCancelWarning = true\">\n          {{'page.dartScoreBoard.setup.gameInProgress.cancelQuestion' | translate}}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"width-100 game-cancel-question alert alert-danger no-margin-bottom\" *ngIf=\"showGameCancelWarning\">\n      <div class=\"message-container alert-danger\">\n        {{'page.dartScoreBoard.setup.cancelGame.hint' | translate}}\n        <button class=\"btn btn-success warning-button-styling\" (click)=\"showGameCancelWarning = false;\">\n          {{'page.dartScoreBoard.setup.cancelGame.cancel' | translate}}\n        </button>\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"cancelGame()\">\n          {{'page.dartScoreBoard.setup.cancelGame.confirm' | translate}}\n        </button>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"col-sm-6 no-padding\">\n    <div class=\"config-group radio-button-group-game-mode\">\n      <h4>\n        {{'page.dartScoreBoard.setup.gameMode' | translate}}\n      </h4>\n      <div *ngFor=\"let gameMode of getGameModes()\">\n        <div class=\"width-100\" (click)=\"setGameMode(gameMode)\">\n          <input type=\"radio\" [value]=\"gameMode\" name=\"gameMode\" [(ngModel)]=\"gameSettings.gameMode\">\n          {{'page.dartScoreBoard.setup.gameMode.' + getGameModeValue(gameMode) | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6 no-padding\">\n    <div class=\"config-group radio-button-group-required-score\">\n      <h4>\n        {{'page.dartScoreBoard.setup.requiredScore' | translate}}\n      </h4>\n\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(901)\">\n        <input type=\"radio\" [value]=\"901\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 901\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(701)\">\n        <input type=\"radio\" [value]=\"701\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 701\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(501)\">\n        <input type=\"radio\" [value]=\"501\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 501\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(301)\">\n        <input type=\"radio\" [value]=\"301\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 301\n      </div>\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = true;\">\n        <input type=\"radio\" [value]=\"true\" name=\"requiredScore\" [(ngModel)]=\"isCustomizedRequiredScore\">\n        {{'page.dartScoreBoard.setup.settings.customized' | translate}}\n        <input *ngIf=\"isCustomizedRequiredScore\" class=\"custom-input\" type=\"number\" name=\"requiredScoreInput\"\n               [(ngModel)]=\"gameSettings.requiredScore\" [min]=\"101\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12 no-padding\">\n    <div class=\"config-group\">\n      <h4>\n        {{'page.dartScoreBoard.setup.configure.players' | translate}}\n      </h4>\n      <hr>\n      <h5>\n        {{'page.dartScoreBoard.setup.player.add.title' | translate}}\n      </h5>\n      <button class=\"btn btn-primary add-player-button\"\n              [disabled]=\"!newPlayerName || newPlayerName.trim() === '' || doesPlayerExists()\"\n              (click)=\"addNewPlayer()\">{{'page.dartScoreBoard.setup.player.add' | translate}}\n      </button>\n      <input class=\"player-input form-control\" type=\"text\" [(ngModel)]=\"newPlayerName\"\n             placeholder=\"{{'page.dartScoreBoard.setup.player.add.placeholder' | translate}}\">\n      <p class=\"alert alert-warning no-margin-bottom player-double-alert\" *ngIf=\"doesPlayerExists()\">\n        {{'page.dartScoreBoard.setup.playerExists.hint' | translate}}\n      </p>\n      <div class=\"clearfix\"></div>\n      <hr>\n      <h5>\n        {{'page.dartScoreBoard.setup.player.order.title' | translate}}\n      </h5>\n      <div cdkDropList *ngIf=\"gameSettings.players && gameSettings.players.length > 0; else showNoPlayersHint\" (cdkDropListDropped)=\"drop($event)\">\n        <button class=\"btn btn-primary player-display\" *ngFor=\"let player of gameSettings.players\" cdkDrag>\n          <img class=\"drag-and-drop-icon\" (click)=\"removePlayer(player)\"\n               src=\"/assets/pictures/tools/dart-score-board/drag-and-drop.svg\">\n          {{player}}\n          <img class=\"delete-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/tools/dart-score-board/trashbin.svg\">\n        </button>\n      </div>\n\n      <ng-template #showNoPlayersHint>\n        <div class=\"width-100 alert alert-danger no-margin-bottom\">\n          {{'page.dartScoreBoard.setup.players.notFound' | translate}}\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"col-sm-12 no-padding\">\n    <div class=\"config-group\">\n      <button class=\"btn btn-success width-100\" [disabled]=\"!isGameReady()\" (click)=\"startGame()\">\n        {{'page.dartScoreBoard.setup.startGame' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n",
                    styles: [".setup-panel{position:relative}.config-group{padding:.5rem;border-radius:5px;margin-bottom:.5rem;background-color:#adadad}@media (min-width:768px){.radio-button-group-game-mode{margin-right:.5rem;height:25rem}.radio-button-group-required-score{height:25rem}}.custom-input{margin-left:.5rem;height:18px;width:50px}.width-100{width:100%}.minimal-advantage{margin-top:1rem}.no-padding{padding:0}.player-display{padding:.5rem;border-radius:5px;margin-bottom:.5rem;text-align:center;width:100%}.add-player-button{width:38%;float:right;margin-bottom:.5rem}.player-input{max-width:60%;margin-right:2%}.player-double-alert{margin-top:.5rem}.clearfix{clear:both}.delete-icon{width:20px;float:right}.drag-and-drop-icon{width:20px;float:left}.no-margin-bottom{margin-bottom:0}.game-running-container{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.game-cancel-question,.game-running-hint{position:absolute;height:100%;background-color:rgba(0,0,0,.7);text-align:center;z-index:2}.warning-button-styling{margin-left:1rem}.message-container{bottom:1rem;position:absolute;left:1rem;right:1rem;padding:1rem;border-radius:5px}.base-padding{padding-left:5px}"]
                }] }
    ];
    /** @nocollapse */
    SetupPanelComponent.ctorParameters = function () { return []; };
    SetupPanelComponent.propDecorators = {
        gameSettings: [{ type: Input }],
        gameStarted: [{ type: Output }]
    };
    return SetupPanelComponent;
}());
export { SetupPanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2V0dXAtcGFuZWwvc2V0dXAtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQWtCRTtRQVBPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFHckMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7O0lBRU0sMENBQVk7OztJQUFuQjs7O1lBQ1EsS0FBSyxHQUFHLEVBQUU7O1lBQ1YsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUNqRCxLQUFtQixJQUFBLEtBQUEsaUJBQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdEQsSUFB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QyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFTSx1REFBeUI7OztJQUFoQztRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFTSx3Q0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTSxrQ0FBSTs7OztJQUFYLFVBQVksS0FBNEI7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Z0JBeEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwwdkxBQTJDOztpQkFFNUM7Ozs7OytCQUdFLEtBQUs7OEJBR0wsTUFBTTs7SUErR1QsMEJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXBIWSxtQkFBbUI7OztJQUU5QiwyQ0FDa0M7O0lBRWxDLDBDQUN3Qzs7SUFFeEMsd0RBQTBDOztJQUMxQyxpREFBa0M7O0lBQ2xDLDRDQUEwQjs7SUFDMUIsb0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tICcuLi9jbGFzc2VzL2dhbWUtc2V0dHRpbmdzJztcbmltcG9ydCB7R2FtZU1vZGVzfSBmcm9tICcuLi9jbGFzc2VzL2dhbWUtbW9kZXMnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNldHVwLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHVwLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2V0dXAtcGFuZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldHVwUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnYW1lU2V0dGluZ3M6IEdhbWVTZXR0aW5ncztcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGdhbWVTdGFydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBpc0N1c3RvbWl6ZWRSZXF1aXJlZFNjb3JlOiBib29sZWFuO1xuICBwdWJsaWMgcmVxdWlyZWRTY29yZU1vZGVsOiBudW1iZXI7XG4gIHB1YmxpYyBuZXdQbGF5ZXJOYW1lID0gJyc7XG4gIHB1YmxpYyBzaG93R2FtZUNhbmNlbFdhcm5pbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkU2NvcmVNb2RlbCA9IHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldEdhbWVNb2RlcygpIHtcbiAgICBjb25zdCBtb2RlcyA9IFtdO1xuICAgIGNvbnN0IGFsbE1vZGVzID0gT2JqZWN0LmtleXMoR2FtZU1vZGVzLnZhbHVlT2YoKSk7XG4gICAgZm9yIChjb25zdCBtb2RlIG9mIGFsbE1vZGVzLnNsaWNlKDAsIGFsbE1vZGVzLmxlbmd0aCAvIDIpKSB7XG4gICAgICBtb2Rlcy5wdXNoKHBhcnNlSW50KG1vZGUsIDEwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVzO1xuICB9XG5cbiAgcHVibGljIGdldEdhbWVNb2RlVmFsdWUoa2V5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gR2FtZU1vZGVzLnZhbHVlT2YoKVtrZXldO1xuICB9XG5cbiAgcHVibGljIGdldENvbnZlcnRlZFJlcXVpcmVkU2NvcmUoKSB7XG4gICAgaWYgKHRoaXMuaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZXF1aXJlZFNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmUgPSBzY29yZTtcbiAgICB0aGlzLnJlcXVpcmVkU2NvcmVNb2RlbCA9IHNjb3JlO1xuICB9XG5cbiAgcHVibGljIHNldEdhbWVNb2RlKG1vZGU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nYW1lU2V0dGluZ3MuZ2FtZU1vZGUgPSBtb2RlO1xuICB9XG5cbiAgcHVibGljIGRvZXNQbGF5ZXJFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMuaW5kZXhPZih0aGlzLm5ld1BsYXllck5hbWUudHJpbSgpKSA+IC0xO1xuICB9XG5cbiAgcHVibGljIGFkZE5ld1BsYXllcigpIHtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm5ld1BsYXllck5hbWUudHJpbSgpICE9PSAnJyAmJiAhdGhpcy5kb2VzUGxheWVyRXhpc3RzKCkpIHtcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMucHVzaCh0aGlzLm5ld1BsYXllck5hbWUpO1xuICAgICAgdGhpcy5uZXdQbGF5ZXJOYW1lID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVBsYXllcihuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuYW1lICYmIG5hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLmluZGV4T2YobmFtZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzR2FtZVJlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVTZXR0aW5ncyAmJlxuICAgICAgdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZSA+IDAgJiZcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMubGVuZ3RoID4gMCAmJlxuICAgICAgdGhpcy5nYW1lU2V0dGluZ3MuZ2FtZU1vZGUgPiAtMTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydEdhbWUoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0dhbWVSZWFkeSgpKSB7XG4gICAgICB0aGlzLmdhbWVTdGFydGVkLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0R2FtZUNhbmNlbFdhcm5pbmdDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5zaG93R2FtZUNhbmNlbFdhcm5pbmcgPyAnZGlzcGxheS13YXJuaW5nJyA6ICdoaWRlLXdhcm5pbmcnO1xuICB9XG5cbiAgcHVibGljIGNhbmNlbEdhbWUoKSB7XG4gICAgdGhpcy5zaG93R2FtZUNhbmNlbFdhcm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iXX0=