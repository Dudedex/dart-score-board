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
                    template: "<h3>\r\n  {{'page.dartScoreBoard.setup.title' | translate}}\r\n</h3>\r\n<div class=\"setup-panel\">\r\n  <div class=\"game-running-container width-100\" *ngIf=\"gameSettings.isGameActive\">\r\n    <div class=\"width-100 game-running-hint no-margin-bottom\" *ngIf=\"!showGameCancelWarning\">\r\n      <div class=\"message-container alert-warning\">\r\n        {{'page.dartScoreBoard.setup.gameInProgress.hint' | translate}}\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"showGameCancelWarning = true\">\r\n          {{'page.dartScoreBoard.setup.gameInProgress.cancelQuestion' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"width-100 game-cancel-question alert alert-danger no-margin-bottom\" *ngIf=\"showGameCancelWarning\">\r\n      <div class=\"message-container alert-danger\">\r\n        {{'page.dartScoreBoard.setup.cancelGame.hint' | translate}}\r\n        <button class=\"btn btn-success warning-button-styling\" (click)=\"showGameCancelWarning = false;\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.cancel' | translate}}\r\n        </button>\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"cancelGame()\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.confirm' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.gameMode' | translate}}\r\n      </h4>\r\n      <div *ngFor=\"let gameMode of getGameModes()\">\r\n        <div class=\"width-100\" (click)=\"setGameMode(gameMode)\">\r\n          <input type=\"radio\" [value]=\"gameMode\" name=\"gameMode\" [(ngModel)]=\"gameSettings.gameMode\">\r\n          {{'page.dartScoreBoard.setup.gameMode.' + getGameModeValue(gameMode) | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.requiredScore' | translate}}\r\n      </h4>\r\n\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(901)\">\r\n        <input type=\"radio\" [value]=\"901\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 901\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(701)\">\r\n        <input type=\"radio\" [value]=\"701\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 701\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(501)\">\r\n        <input type=\"radio\" [value]=\"501\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 501\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(301)\">\r\n        <input type=\"radio\" [value]=\"301\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 301\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = true;\">\r\n        <input type=\"radio\" [value]=\"true\" name=\"requiredScore\" [(ngModel)]=\"isCustomizedRequiredScore\">\r\n        {{'page.dartScoreBoard.setup.settings.customized' | translate}}\r\n        <input *ngIf=\"isCustomizedRequiredScore\" class=\"custom-input\" type=\"number\" name=\"requiredScoreInput\"\r\n               [(ngModel)]=\"gameSettings.requiredScore\" [min]=\"101\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.configure.players' | translate}}\r\n      </h4>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.add.title' | translate}}\r\n      </h5>\r\n      <button class=\"btn btn-primary add-player-button\" [disabled]=\"!newPlayerName || newPlayerName.trim() === '' || doesPlayerExists()\"\r\n              (click)=\"addNewPlayer()\">{{'page.dartScoreBoard.setup.player.add' | translate}}\r\n      </button>\r\n      <input class=\"player-input form-control\" type=\"text\" [(ngModel)]=\"newPlayerName\"\r\n             placeholder=\"{{'page.dartScoreBoard.setup.player.add.placeholder' | translate}}\">\r\n      <p class=\"alert alert-warning no-margin-bottom player-double-alert\" *ngIf=\"doesPlayerExists()\">\r\n        {{'page.dartScoreBoard.setup.playerExists.hint' | translate}}\r\n      </p>\r\n      <div class=\"clearfix\"></div>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.order.title' | translate}}\r\n      </h5>\r\n      <div cdkDropList *ngIf=\"gameSettings.players && gameSettings.players.length > 0; else showNoPlayersHint\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <button class=\"btn btn-primary player-display\" *ngFor=\"let player of gameSettings.players\" cdkDrag>\r\n          <img class=\"drag-and-drop-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/dart-score-board/drag-and-drop.svg\">{{player}}<img class=\"delete-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/dart-score-board/trashbin.svg\">\r\n        </button>\r\n      </div>\r\n\r\n      <ng-template #showNoPlayersHint>\r\n        <div class=\"width-100 alert alert-danger no-margin-bottom\">\r\n          {{'page.dartScoreBoard.setup.players.notFound' | translate}}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <button class=\"btn btn-success width-100\" [disabled]=\"!isGameReady()\" (click)=\"startGame()\">\r\n        {{'page.dartScoreBoard.setup.startGame' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n",
                    styles: [".setup-panel{position:relative}.config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.radio-button-group{height:21rem}.custom-input{margin-left:.5rem;height:18px;width:50px}.width-100{width:100%}.minimal-advantage{margin-top:1rem}.no-padding{padding:0}.player-display{padding:.5rem;border-radius:5px;margin-bottom:.5rem;text-align:center;width:100%}.add-player-button{width:38%;float:right;margin-bottom:.5rem}.player-input{max-width:60%;margin-right:2%}.player-double-alert{margin-top:.5rem}.clearfix{clear:both}.delete-icon{width:20px;float:right}.drag-and-drop-icon{width:20px;float:left}.no-margin-bottom{margin-bottom:0}.game-running-container{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.game-cancel-question,.game-running-hint{position:absolute;height:100%;background-color:rgba(0,0,0,.7);text-align:center;z-index:2}.warning-button-styling{margin-left:1rem}.message-container{bottom:1rem;position:absolute;left:1rem;right:1rem;padding:1rem;border-radius:5px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2V0dXAtcGFuZWwvc2V0dXAtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTtJQWtCRTtRQVBPLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFHckMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7U0FDM0Q7SUFDSCxDQUFDOzs7O0lBRU0sMENBQVk7OztJQUFuQjs7O1lBQ1EsS0FBSyxHQUFHLEVBQUU7O1lBQ1YsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUNqRCxLQUFtQixJQUFBLEtBQUEsaUJBQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdEQsSUFB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QyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7SUFFTSx1REFBeUI7OztJQUFoQztRQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFTSx3Q0FBVTs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTSxrQ0FBSTs7OztJQUFYLFVBQVksS0FBNEI7UUFDdEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Z0JBeEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw0MUxBQTJDOztpQkFFNUM7Ozs7OytCQUdFLEtBQUs7OEJBR0wsTUFBTTs7SUErR1QsMEJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXBIWSxtQkFBbUI7OztJQUU5QiwyQ0FDa0M7O0lBRWxDLDBDQUN3Qzs7SUFFeEMsd0RBQTBDOztJQUMxQyxpREFBa0M7O0lBQ2xDLDRDQUEwQjs7SUFDMUIsb0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gJy4uL2NsYXNzZXMvZ2FtZS1zZXR0dGluZ3MnO1xyXG5pbXBvcnQge0dhbWVNb2Rlc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcclxuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNldHVwLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dXAtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NldHVwLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2V0dXBQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdhbWVTZXR0aW5nczogR2FtZVNldHRpbmdzO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZ2FtZVN0YXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHB1YmxpYyBpc0N1c3RvbWl6ZWRSZXF1aXJlZFNjb3JlOiBib29sZWFuO1xyXG4gIHB1YmxpYyByZXF1aXJlZFNjb3JlTW9kZWw6IG51bWJlcjtcclxuICBwdWJsaWMgbmV3UGxheWVyTmFtZSA9ICcnO1xyXG4gIHB1YmxpYyBzaG93R2FtZUNhbmNlbFdhcm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLnJlcXVpcmVkU2NvcmUpIHtcclxuICAgICAgdGhpcy5yZXF1aXJlZFNjb3JlTW9kZWwgPSB0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEdhbWVNb2RlcygpIHtcclxuICAgIGNvbnN0IG1vZGVzID0gW107XHJcbiAgICBjb25zdCBhbGxNb2RlcyA9IE9iamVjdC5rZXlzKEdhbWVNb2Rlcy52YWx1ZU9mKCkpO1xyXG4gICAgZm9yIChjb25zdCBtb2RlIG9mIGFsbE1vZGVzLnNsaWNlKDAsIGFsbE1vZGVzLmxlbmd0aCAvIDIpKSB7XHJcbiAgICAgIG1vZGVzLnB1c2gocGFyc2VJbnQobW9kZSwgMTApKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9kZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R2FtZU1vZGVWYWx1ZShrZXk6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIEdhbWVNb2Rlcy52YWx1ZU9mKClba2V5XTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb252ZXJ0ZWRSZXF1aXJlZFNjb3JlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNDdXN0b21pemVkUmVxdWlyZWRTY29yZSkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRSZXF1aXJlZFNjb3JlKHNjb3JlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lU2V0dGluZ3MucmVxdWlyZWRTY29yZSA9IHNjb3JlO1xyXG4gICAgdGhpcy5yZXF1aXJlZFNjb3JlTW9kZWwgPSBzY29yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRHYW1lTW9kZShtb2RlOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lU2V0dGluZ3MuZ2FtZU1vZGUgPSBtb2RlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRvZXNQbGF5ZXJFeGlzdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lU2V0dGluZ3MucGxheWVycy5pbmRleE9mKHRoaXMubmV3UGxheWVyTmFtZS50cmltKCkpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkTmV3UGxheWVyKCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVNldHRpbmdzLmlzR2FtZUFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uZXdQbGF5ZXJOYW1lLnRyaW0oKSAhPT0gJycgJiYgIXRoaXMuZG9lc1BsYXllckV4aXN0cygpKSB7XHJcbiAgICAgIHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMucHVzaCh0aGlzLm5ld1BsYXllck5hbWUpO1xyXG4gICAgICB0aGlzLm5ld1BsYXllck5hbWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQbGF5ZXIobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChuYW1lICYmIG5hbWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMuaW5kZXhPZihuYW1lKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0dhbWVSZWFkeSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdhbWVTZXR0aW5ncyAmJlxyXG4gICAgICB0aGlzLmdhbWVTZXR0aW5ncy5yZXF1aXJlZFNjb3JlID4gMCAmJlxyXG4gICAgICB0aGlzLmdhbWVTZXR0aW5ncy5wbGF5ZXJzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgdGhpcy5nYW1lU2V0dGluZ3MuZ2FtZU1vZGUgPiAtMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydEdhbWUoKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lU2V0dGluZ3MuaXNHYW1lQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzR2FtZVJlYWR5KCkpIHtcclxuICAgICAgdGhpcy5nYW1lU3RhcnRlZC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0R2FtZUNhbmNlbFdhcm5pbmdDbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dHYW1lQ2FuY2VsV2FybmluZyA/ICdkaXNwbGF5LXdhcm5pbmcnIDogJ2hpZGUtd2FybmluZyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuY2VsR2FtZSgpIHtcclxuICAgIHRoaXMuc2hvd0dhbWVDYW5jZWxXYXJuaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmICh0aGlzLmdhbWVTZXR0aW5ncy5pc0dhbWVBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuZ2FtZVNldHRpbmdzLnBsYXllcnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==