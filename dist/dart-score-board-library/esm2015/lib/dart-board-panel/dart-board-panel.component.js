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
                template: "<div class=\"main-panel\">\n  <app-setup-panel [gameSettings]=\"dartGameData.settings\" (gameStarted)=\"startNewGame()\"></app-setup-panel>\n  <hr>\n  <app-game-panel [dartGameData]=\"dartGameData\" #gamePanel></app-game-panel>\n  <div class=\"col-xs-12\">\n    <hr>\n  </div>\n  <app-export-import-data-panel [dartGameData]=\"dartGameData\"></app-export-import-data-panel>\n</div>\n\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQWMsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFHL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFPckUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQVVsQyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUMvQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM1QyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsNllBQWdEOzthQUVqRDs7OztZQVhPLGdCQUFnQjs7O3dCQWNyQixTQUFTLFNBQUMsV0FBVztxQkFHckIsS0FBSzs7OztJQUhOLDRDQUNxQzs7SUFFckMseUNBQ3NCOztJQUV0QiwrQ0FBa0M7Ozs7O0lBRXRCLDRDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXJ0R2FtZURhdGF9IGZyb20gJy4vY2xhc3Nlcy9kYXJ0LWdhbWUtZGF0YSc7XG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSAnLi9jbGFzc2VzL2dhbWUtc2V0dHRpbmdzJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0aW9uUHJvdmlkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb24vdHJhbnNsYXRpb24tcHJvdmlkZXInO1xuaW1wb3J0IHtHYW1lTW9kZXN9IGZyb20gJy4vY2xhc3Nlcy9nYW1lLW1vZGVzJztcbmltcG9ydCB7UGxheWVyRGF0YX0gZnJvbSAnLi9jbGFzc2VzL3BsYXllci1kYXRhJztcbmltcG9ydCB7U2NvcmVFbnRyeX0gZnJvbSAnLi9jbGFzc2VzL3Njb3JlLWVudHJ5JztcbmltcG9ydCB7R2FtZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2dhbWUtcGFuZWwvZ2FtZS1wYW5lbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGFydC1ib2FyZC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGFydEJvYXJkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQFZpZXdDaGlsZCgnZ2FtZVBhbmVsJylcbiAgcHVibGljIGdhbWVQYW5lbDogR2FtZVBhbmVsQ29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcblxuICBwdWJsaWMgZGFydEdhbWVEYXRhOiBEYXJ0R2FtZURhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGFydEdhbWVEYXRhID0gbmV3IERhcnRHYW1lRGF0YSgpO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzID0gbmV3IEdhbWVTZXR0aW5ncygpO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLmdhbWVNb2RlID0gR2FtZU1vZGVzLkZSRUVfR0FNRTtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncy5yZXF1aXJlZFNjb3JlID0gNTAxO1xuICAgIHRoaXMuZGFydEdhbWVEYXRhLnNldHRpbmdzLnBsYXllcnMgPSBbXTtcbiAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cyA9IFtdO1xuICAgIFRyYW5zbGF0aW9uUHJvdmlkZXIuc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRoaXMudHJhbnNsYXRlLCB0aGlzLmxvY2FsZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gIH1cblxuICBwdWJsaWMgc3RhcnROZXdHYW1lKCkge1xuICAgIHRoaXMuZ2FtZVBhbmVsLnN0YXJ0TmV3R2FtZSgpO1xuICB9XG59XG4iXX0=