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
                    template: "<div class=\"main-panel\">\r\n  <app-setup-panel [gameSettings]=\"dartGameData.settings\" (gameStarted)=\"startNewGame()\"></app-setup-panel>\r\n  <hr>\r\n  <app-game-panel [dartGameData]=\"dartGameData\" #gamePanel></app-game-panel>\r\n  <div class=\"col-xs-12\">\r\n    <hr>\r\n  </div>\r\n  <app-export-import-data-panel [dartGameData]=\"dartGameData\"></app-export-import-data-panel>\r\n</div>\r\n\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFlRSxpQ0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDL0MsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRU0sOENBQVk7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxpYUFBZ0Q7O2lCQUVqRDs7OztnQkFYTyxnQkFBZ0I7Ozs0QkFjckIsU0FBUyxTQUFDLFdBQVc7eUJBR3JCLEtBQUs7O0lBd0JSLDhCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksdUJBQXVCOzs7SUFFbEMsNENBQ3FDOztJQUVyQyx5Q0FDc0I7O0lBRXRCLCtDQUFrQzs7Ozs7SUFFdEIsNENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RGFydEdhbWVEYXRhfSBmcm9tICcuL2NsYXNzZXMvZGFydC1nYW1lLWRhdGEnO1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSAnLi9jbGFzc2VzL2dhbWUtc2V0dHRpbmdzJztcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtUcmFuc2xhdGlvblByb3ZpZGVyfSBmcm9tICcuL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyJztcclxuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcclxuaW1wb3J0IHtQbGF5ZXJEYXRhfSBmcm9tICcuL2NsYXNzZXMvcGxheWVyLWRhdGEnO1xyXG5pbXBvcnQge1Njb3JlRW50cnl9IGZyb20gJy4vY2xhc3Nlcy9zY29yZS1lbnRyeSc7XHJcbmltcG9ydCB7R2FtZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2dhbWUtcGFuZWwvZ2FtZS1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtZGFydC1ib2FyZC1wYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhcnQtYm9hcmQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhcnQtYm9hcmQtcGFuZWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXJ0Qm9hcmRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZ2FtZVBhbmVsJylcclxuICBwdWJsaWMgZ2FtZVBhbmVsOiBHYW1lUGFuZWxDb21wb25lbnQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgZGFydEdhbWVEYXRhOiBEYXJ0R2FtZURhdGE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZGFydEdhbWVEYXRhID0gbmV3IERhcnRHYW1lRGF0YSgpO1xyXG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MgPSBuZXcgR2FtZVNldHRpbmdzKCk7XHJcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5nYW1lTW9kZSA9IEdhbWVNb2Rlcy5GUkVFX0dBTUU7XHJcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5yZXF1aXJlZFNjb3JlID0gNTAxO1xyXG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucGxheWVycyA9IFtdO1xyXG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMgPSBbXTtcclxuICAgIFRyYW5zbGF0aW9uUHJvdmlkZXIuc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRoaXMudHJhbnNsYXRlLCB0aGlzLmxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lUGFuZWwuc3RhcnROZXdHYW1lKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==