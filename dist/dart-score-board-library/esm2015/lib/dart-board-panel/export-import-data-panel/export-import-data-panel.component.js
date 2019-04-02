/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DartGameData } from '../classes/dart-game-data';
import { PlayerData } from '../classes/player-data';
export class ExportImportDataPanelComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    saveGame() {
        /** @type {?} */
        const a = document.createElement('a');
        /** @type {?} */
        let objectString = '{';
        objectString += '"settings":' + JSON.stringify(this.dartGameData.settings) + ',';
        objectString += '"currentPlayerMapKeys": ' + JSON.stringify(this.dartGameData.currentPlayerMapKeys) + ',';
        objectString += '"currentActivePlayer": ' + JSON.stringify(this.dartGameData.currentActivePlayer) + ',';
        objectString += '"legFinished": ' + JSON.stringify(this.dartGameData.legFinished) + ',';
        objectString += '"gameData": [';
        /** @type {?} */
        let isFirst = true;
        for (const key of Array.from(this.dartGameData.gameData.keys())) {
            if (!isFirst) {
                objectString += ',';
            }
            else {
                isFirst = false;
            }
            /** @type {?} */
            const line = JSON.stringify(this.dartGameData.gameData.get(key));
            objectString += '{"key": "' + key + '",';
            objectString += '"value": ' + line + '}';
        }
        objectString += ']}';
        a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(objectString));
        a.setAttribute('download', 'game-data-' + new Date().getTime() + '.json');
        a.click();
    }
    /**
     * @return {?}
     */
    loadGame() {
        this.importGameButton.nativeElement.click();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileLoaded(file) {
        /** @type {?} */
        const fileReader = new FileReader();
        fileReader.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const data = (/** @type {?} */ (fileReader.result));
            /** @type {?} */
            const settings = JSON.parse(data).settings;
            /** @type {?} */
            const currentActivePlayer = JSON.parse(data).currentActivePlayer;
            /** @type {?} */
            const currentPlayerMapKeys = JSON.parse(data).currentPlayerMapKeys;
            /** @type {?} */
            const legFinished = JSON.parse(data).legFinished;
            /** @type {?} */
            const gameData = new Map();
            /** @type {?} */
            let throwsDone = 0;
            for (const gameDataObject of JSON.parse(data).gameData) {
                /** @type {?} */
                const gameEntry = new PlayerData();
                gameEntry.currentLeg.scores = [];
                for (const score of gameDataObject.value.currentLeg.scores) {
                    gameEntry.currentLeg.scores.push(score);
                }
                throwsDone += gameEntry.currentLeg.scores.length;
                gameData.set(gameDataObject.key, gameDataObject.value);
            }
            this.dartGameData.throwsDone = throwsDone;
            this.dartGameData.currentActivePlayer = currentActivePlayer;
            this.dartGameData.legFinished = legFinished === 'true';
            this.dartGameData.currentPlayerMapKeys = currentPlayerMapKeys;
            this.dartGameData.gameData = (/** @type {?} */ (gameData));
            this.dartGameData.settings = (/** @type {?} */ (settings));
        });
        fileReader.readAsText(file.target.files[0]);
    }
}
ExportImportDataPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-export-import-data-panel',
                template: "<div class=\"col-xs-12 config-group\">\n    <button class=\"btn btn-primary col-xs-12 margin-bottom\" *ngIf=\"dartGameData && dartGameData.settings && dartGameData.settings.isGameActive\" (click)=\"saveGame()\">\n      {{'page.dartScoreBoard.game.export' | translate}}\n    </button>\n    <button class=\"btn btn-success col-xs-12\" (click)=\"loadGame()\">\n      {{'page.dartScoreBoard.game.import' | translate}}\n    </button>\n</div>\n<input class=\"btn btn-primary\" type=\"file\" accept=\"application/json\" style=\"display: none\" (change)=\"fileLoaded($event)\"\n       #loadGameButton/>\n",
                styles: [".config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.margin-bottom{margin-bottom:.5rem}"]
            }] }
];
/** @nocollapse */
ExportImportDataPanelComponent.ctorParameters = () => [];
ExportImportDataPanelComponent.propDecorators = {
    importGameButton: [{ type: ViewChild, args: ['loadGameButton',] }],
    dartGameData: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExportImportDataPanelComponent.prototype.importGameButton;
    /** @type {?} */
    ExportImportDataPanelComponent.prototype.dartGameData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LWJvYXJkLXBhbmVsL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC9leHBvcnQtaW1wb3J0LWRhdGEtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFPbEQsTUFBTSxPQUFPLDhCQUE4QjtJQVF6QyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVNLFFBQVE7O2NBQ1AsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDOztZQUNqQyxZQUFZLEdBQUcsR0FBRztRQUN0QixZQUFZLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakYsWUFBWSxJQUFJLDBCQUEwQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxRyxZQUFZLElBQUkseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hHLFlBQVksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FB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b0JBQW9CLENBQUM7WUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsUUFBUSxFQUEyQixDQUFDO1lBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLG1CQUFBLFFBQVEsRUFBZ0IsQ0FBQztRQUN4RCxDQUFDLENBQUEsQ0FBQztRQUNGLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGdtQkFBd0Q7O2FBRXpEOzs7OzsrQkFHRSxTQUFTLFNBQUMsZ0JBQWdCOzJCQUcxQixLQUFLOzs7O0lBSE4sMERBQ29DOztJQUVwQyxzREFDa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGFydEdhbWVEYXRhfSBmcm9tICcuLi9jbGFzc2VzL2RhcnQtZ2FtZS1kYXRhJztcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tICcuLi9jbGFzc2VzL2dhbWUtc2V0dHRpbmdzJztcbmltcG9ydCB7UGxheWVyRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9wbGF5ZXItZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1leHBvcnQtaW1wb3J0LWRhdGEtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBvcnRJbXBvcnREYXRhUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2xvYWRHYW1lQnV0dG9uJylcbiAgcHVibGljIGltcG9ydEdhbWVCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRhcnRHYW1lRGF0YTogRGFydEdhbWVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUdhbWUoKSB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb2JqZWN0U3RyaW5nID0gJ3snO1xuICAgIG9iamVjdFN0cmluZyArPSAnXCJzZXR0aW5nc1wiOicgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncykgKyAnLCc7XG4gICAgb2JqZWN0U3RyaW5nICs9ICdcImN1cnJlbnRQbGF5ZXJNYXBLZXlzXCI6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50UGxheWVyTWFwS2V5cykgKyAnLCc7XG4gICAgb2JqZWN0U3RyaW5nICs9ICdcImN1cnJlbnRBY3RpdmVQbGF5ZXJcIjogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIpICsgJywnO1xuICAgIG9iamVjdFN0cmluZyArPSAnXCJsZWdGaW5pc2hlZFwiOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQpICsgJywnO1xuICAgIG9iamVjdFN0cmluZyArPSAnXCJnYW1lRGF0YVwiOiBbJztcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5rZXlzKCkpKSB7XG4gICAgICBpZiAoIWlzRmlyc3QpIHtcbiAgICAgICAgb2JqZWN0U3RyaW5nICs9ICcsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbmUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YS5nZXQoa2V5KSk7XG4gICAgICBvYmplY3RTdHJpbmcgKz0gJ3tcImtleVwiOiBcIicgKyBrZXkgKyAnXCIsJztcbiAgICAgIG9iamVjdFN0cmluZyArPSAnXCJ2YWx1ZVwiOiAnICsgbGluZSArICd9JztcbiAgICB9XG4gICAgb2JqZWN0U3RyaW5nICs9ICddfSc7XG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLXUsJyArIGVuY29kZVVSSUNvbXBvbmVudChvYmplY3RTdHJpbmcpKTtcbiAgICBhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnZ2FtZS1kYXRhLScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcuanNvbicpO1xuICAgIGEuY2xpY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkR2FtZSgpIHtcbiAgICB0aGlzLmltcG9ydEdhbWVCdXR0b24ubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgcHVibGljIGZpbGVMb2FkZWQoZmlsZTogYW55KSB7XG4gICAgY29uc3QgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gZmlsZVJlYWRlci5yZXN1bHQgYXMgYW55O1xuICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGRhdGEpLnNldHRpbmdzO1xuICAgICAgY29uc3QgY3VycmVudEFjdGl2ZVBsYXllciA9IEpTT04ucGFyc2UoZGF0YSkuY3VycmVudEFjdGl2ZVBsYXllcjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gSlNPTi5wYXJzZShkYXRhKS5jdXJyZW50UGxheWVyTWFwS2V5cztcbiAgICAgIGNvbnN0IGxlZ0ZpbmlzaGVkID0gSlNPTi5wYXJzZShkYXRhKS5sZWdGaW5pc2hlZDtcbiAgICAgIGNvbnN0IGdhbWVEYXRhID0gbmV3IE1hcDxzdHJpbmcsIFBsYXllckRhdGE+KCk7XG4gICAgICBsZXQgdGhyb3dzRG9uZSA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGdhbWVEYXRhT2JqZWN0IG9mIEpTT04ucGFyc2UoZGF0YSkuZ2FtZURhdGEpIHtcbiAgICAgICAgY29uc3QgZ2FtZUVudHJ5ID0gbmV3IFBsYXllckRhdGEoKTtcbiAgICAgICAgZ2FtZUVudHJ5LmN1cnJlbnRMZWcuc2NvcmVzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2NvcmUgb2YgZ2FtZURhdGFPYmplY3QudmFsdWUuY3VycmVudExlZy5zY29yZXMpIHtcbiAgICAgICAgICBnYW1lRW50cnkuY3VycmVudExlZy5zY29yZXMucHVzaChzY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dzRG9uZSArPSBnYW1lRW50cnkuY3VycmVudExlZy5zY29yZXMubGVuZ3RoO1xuICAgICAgICBnYW1lRGF0YS5zZXQoZ2FtZURhdGFPYmplY3Qua2V5LCBnYW1lRGF0YU9iamVjdC52YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS50aHJvd3NEb25lID0gdGhyb3dzRG9uZTtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRBY3RpdmVQbGF5ZXIgPSBjdXJyZW50QWN0aXZlUGxheWVyO1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEubGVnRmluaXNoZWQgPSBsZWdGaW5pc2hlZCA9PT0gJ3RydWUnO1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMgPSBjdXJyZW50UGxheWVyTWFwS2V5cztcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmdhbWVEYXRhID0gZ2FtZURhdGEgYXMgTWFwPHN0cmluZywgUGxheWVyRGF0YT47XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5zZXR0aW5ncyA9IHNldHRpbmdzIGFzIEdhbWVTZXR0aW5ncztcbiAgICB9O1xuICAgIGZpbGVSZWFkZXIucmVhZEFzVGV4dChmaWxlLnRhcmdldC5maWxlc1swXSk7XG4gIH1cblxufVxuIl19