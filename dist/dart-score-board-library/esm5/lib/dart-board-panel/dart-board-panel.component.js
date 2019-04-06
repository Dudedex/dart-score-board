/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { DartGameData } from './classes/dart-game-data';
import { GameSettings } from './classes/game-setttings';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './translation/translation-provider';
import { GameModes } from './classes/game-modes';
import { GamePanelComponent } from './game-panel/game-panel.component';
var DartBoardPanelComponent = /** @class */ (function () {
    function DartBoardPanelComponent(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    DartBoardPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dartGameData = new DartGameData();
        this.dartGameData.settings = new GameSettings();
        this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
        this.dartGameData.settings.requiredScore = 501;
        this.dartGameData.settings.players = [];
        this.dartGameData.currentPlayerMapKeys = [];
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DartBoardPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    DartBoardPanelComponent.prototype.startNewGame = /**
     * @return {?}
     */
    function () {
        this.gamePanel.startNewGame();
    };
    DartBoardPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-dart-board-panel',
                    template: "<div class=\"main-panel\">\n  <app-setup-panel [gameSettings]=\"dartGameData.settings\" (gameStarted)=\"startNewGame()\"></app-setup-panel>\n  <hr>\n  <app-game-panel [dartGameData]=\"dartGameData\" #gamePanel></app-game-panel>\n  <div class=\"col-xs-12\">\n    <hr>\n  </div>\n  <app-export-import-data-panel [dartGameData]=\"dartGameData\"></app-export-import-data-panel>\n</div>\n\n",
                    styles: [".main-panel{max-width:1000px;margin:0 auto 3rem;position:relative;min-width:280px}"]
                }] }
    ];
    /** @nocollapse */
    DartBoardPanelComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    DartBoardPanelComponent.propDecorators = {
        gamePanel: [{ type: ViewChild, args: ['gamePanel',] }],
        locale: [{ type: Input }]
    };
    return DartBoardPanelComponent;
}());
export { DartBoardPanelComponent };
if (false) {
    /** @type {?} */
    DartBoardPanelComponent.prototype.gamePanel;
    /** @type {?} */
    DartBoardPanelComponent.prototype.locale;
    /** @type {?} */
    DartBoardPanelComponent.prototype.dartGameData;
    /**
     * @type {?}
     * @private
     */
    DartBoardPanelComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFlRSxpQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDL0MsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRU0sOENBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw2WUFBZ0Q7O2lCQUVqRDs7OztnQkFYTyxnQkFBZ0I7Ozs0QkFjckIsU0FBUyxTQUFDLFdBQVc7eUJBR3JCLEtBQUs7O0lBd0JSLDhCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksdUJBQXVCOzs7SUFFbEMsNENBQ3FDOztJQUVyQyx5Q0FDc0I7O0lBRXRCLCtDQUFrQzs7Ozs7SUFFdEIsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhcnRHYW1lRGF0YX0gZnJvbSAnLi9jbGFzc2VzL2RhcnQtZ2FtZS1kYXRhJztcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tICcuL2NsYXNzZXMvZ2FtZS1zZXR0dGluZ3MnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRpb25Qcm92aWRlcn0gZnJvbSAnLi90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlcic7XG5pbXBvcnQge0dhbWVNb2Rlc30gZnJvbSAnLi9jbGFzc2VzL2dhbWUtbW9kZXMnO1xuaW1wb3J0IHtQbGF5ZXJEYXRhfSBmcm9tICcuL2NsYXNzZXMvcGxheWVyLWRhdGEnO1xuaW1wb3J0IHtTY29yZUVudHJ5fSBmcm9tICcuL2NsYXNzZXMvc2NvcmUtZW50cnknO1xuaW1wb3J0IHtHYW1lUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXJ0LWJvYXJkLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhcnQtYm9hcmQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXJ0Qm9hcmRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBAVmlld0NoaWxkKCdnYW1lUGFuZWwnKVxuICBwdWJsaWMgZ2FtZVBhbmVsOiBHYW1lUGFuZWxDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBkYXJ0R2FtZURhdGE6IERhcnRHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEgPSBuZXcgRGFydEdhbWVEYXRhKCk7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MgPSBuZXcgR2FtZVNldHRpbmdzKCk7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuZ2FtZU1vZGUgPSBHYW1lTW9kZXMuRlJFRV9HQU1FO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnJlcXVpcmVkU2NvcmUgPSA1MDE7XG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycyA9IFtdO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gW107XG4gICAgVHJhbnNsYXRpb25Qcm92aWRlci5zZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodGhpcy50cmFuc2xhdGUsIHRoaXMubG9jYWxlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydE5ld0dhbWUoKSB7XG4gICAgdGhpcy5nYW1lUGFuZWwuc3RhcnROZXdHYW1lKCk7XG4gIH1cbn1cbiJdfQ==