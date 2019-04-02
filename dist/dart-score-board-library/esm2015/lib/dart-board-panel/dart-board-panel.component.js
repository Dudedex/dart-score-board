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
export class DartBoardPanelComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dartGameData = new DartGameData();
        this.dartGameData.settings = new GameSettings();
        this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
        this.dartGameData.settings.requiredScore = 501;
        this.dartGameData.settings.players = [];
        this.dartGameData.currentPlayerMapKeys = [];
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    startNewGame() {
        this.gamePanel.startNewGame();
    }
}
DartBoardPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dart-board-panel',
                template: "<div class=\"main-panel\">\r\n  <app-setup-panel [gameSettings]=\"dartGameData.settings\" (gameStarted)=\"startNewGame()\"></app-setup-panel>\r\n  <hr>\r\n  <app-game-panel [dartGameData]=\"dartGameData\" #gamePanel></app-game-panel>\r\n  <div class=\"col-xs-12\">\r\n    <hr>\r\n  </div>\r\n  <app-export-import-data-panel [dartGameData]=\"dartGameData\"></app-export-import-data-panel>\r\n</div>\r\n\r\n",
                styles: [".main-panel{max-width:1000px;margin:0 auto 3rem;position:relative;min-width:280px}"]
            }] }
];
/** @nocollapse */
DartBoardPanelComponent.ctorParameters = () => [
    { type: TranslateService }
];
DartBoardPanelComponent.propDecorators = {
    gamePanel: [{ type: ViewChild, args: ['gamePanel',] }],
    locale: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFPckUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVVsQyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUMvQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsaWFBQWdEOzthQUVqRDs7OztZQVhPLGdCQUFnQjs7O3dCQWNyQixTQUFTLFNBQUMsV0FBVztxQkFHckIsS0FBSzs7OztJQUhOLDRDQUNxQzs7SUFFckMseUNBQ3NCOztJQUV0QiwrQ0FBa0M7Ozs7O0lBRXRCLDRDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RhcnRHYW1lRGF0YX0gZnJvbSAnLi9jbGFzc2VzL2RhcnQtZ2FtZS1kYXRhJztcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gJy4vY2xhc3Nlcy9nYW1lLXNldHR0aW5ncyc7XHJcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7VHJhbnNsYXRpb25Qcm92aWRlcn0gZnJvbSAnLi90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlcic7XHJcbmltcG9ydCB7R2FtZU1vZGVzfSBmcm9tICcuL2NsYXNzZXMvZ2FtZS1tb2Rlcyc7XHJcbmltcG9ydCB7UGxheWVyRGF0YX0gZnJvbSAnLi9jbGFzc2VzL3BsYXllci1kYXRhJztcclxuaW1wb3J0IHtTY29yZUVudHJ5fSBmcm9tICcuL2NsYXNzZXMvc2NvcmUtZW50cnknO1xyXG5pbXBvcnQge0dhbWVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWRhcnQtYm9hcmQtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFydEJvYXJkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2dhbWVQYW5lbCcpXHJcbiAgcHVibGljIGdhbWVQYW5lbDogR2FtZVBhbmVsQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcclxuXHJcbiAgcHVibGljIGRhcnRHYW1lRGF0YTogRGFydEdhbWVEYXRhO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRhcnRHYW1lRGF0YSA9IG5ldyBEYXJ0R2FtZURhdGEoKTtcclxuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzID0gbmV3IEdhbWVTZXR0aW5ncygpO1xyXG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MuZ2FtZU1vZGUgPSBHYW1lTW9kZXMuRlJFRV9HQU1FO1xyXG4gICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MucmVxdWlyZWRTY29yZSA9IDUwMTtcclxuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMgPSBbXTtcclxuICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gW107XHJcbiAgICBUcmFuc2xhdGlvblByb3ZpZGVyLnNldHVwVHJhbnNsYXRpb25Qcm92aWRlcih0aGlzLnRyYW5zbGF0ZSwgdGhpcy5sb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0TmV3R2FtZSgpIHtcclxuICAgIHRoaXMuZ2FtZVBhbmVsLnN0YXJ0TmV3R2FtZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=