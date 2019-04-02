/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DartGameData } from '../classes/dart-game-data';
import { PlayerData } from '../classes/player-data';
var ExportImportDataPanelComponent = /** @class */ (function () {
    function ExportImportDataPanelComponent() {
    }
    /**
     * @return {?}
     */
    ExportImportDataPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ExportImportDataPanelComponent.prototype.saveGame = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var a = document.createElement('a');
        /** @type {?} */
        var objectString = '{';
        objectString += '"settings":' + JSON.stringify(this.dartGameData.settings) + ',';
        objectString += '"currentPlayerMapKeys": ' + JSON.stringify(this.dartGameData.currentPlayerMapKeys) + ',';
        objectString += '"currentActivePlayer": ' + JSON.stringify(this.dartGameData.currentActivePlayer) + ',';
        objectString += '"legFinished": ' + JSON.stringify(this.dartGameData.legFinished) + ',';
        objectString += '"gameData": [';
        /** @type {?} */
        var isFirst = true;
        try {
            for (var _b = tslib_1.__values(Array.from(this.dartGameData.gameData.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (!isFirst) {
                    objectString += ',';
                }
                else {
                    isFirst = false;
                }
                /** @type {?} */
                var line = JSON.stringify(this.dartGameData.gameData.get(key));
                objectString += '{"key": "' + key + '",';
                objectString += '"value": ' + line + '}';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        objectString += ']}';
        a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(objectString));
        a.setAttribute('download', 'game-data-' + new Date().getTime() + '.json');
        a.click();
    };
    /**
     * @return {?}
     */
    ExportImportDataPanelComponent.prototype.loadGame = /**
     * @return {?}
     */
    function () {
        this.importGameButton.nativeElement.click();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ExportImportDataPanelComponent.prototype.fileLoaded = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var fileReader = new FileReader();
        fileReader.onload = (/**
         * @return {?}
         */
        function () {
            var e_2, _a, e_3, _b;
            /** @type {?} */
            var data = (/** @type {?} */ (fileReader.result));
            /** @type {?} */
            var settings = JSON.parse(data).settings;
            /** @type {?} */
            var currentActivePlayer = JSON.parse(data).currentActivePlayer;
            /** @type {?} */
            var currentPlayerMapKeys = JSON.parse(data).currentPlayerMapKeys;
            /** @type {?} */
            var legFinished = JSON.parse(data).legFinished;
            /** @type {?} */
            var gameData = new Map();
            /** @type {?} */
            var throwsDone = 0;
            try {
                for (var _c = tslib_1.__values(JSON.parse(data).gameData), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var gameDataObject = _d.value;
                    /** @type {?} */
                    var gameEntry = new PlayerData();
                    gameEntry.currentLeg.scores = [];
                    try {
                        for (var _e = tslib_1.__values(gameDataObject.value.currentLeg.scores), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var score = _f.value;
                            gameEntry.currentLeg.scores.push(score);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    throwsDone += gameEntry.currentLeg.scores.length;
                    gameData.set(gameDataObject.key, gameDataObject.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.dartGameData.throwsDone = throwsDone;
            _this.dartGameData.currentActivePlayer = currentActivePlayer;
            _this.dartGameData.legFinished = legFinished === 'true';
            _this.dartGameData.currentPlayerMapKeys = currentPlayerMapKeys;
            _this.dartGameData.gameData = (/** @type {?} */ (gameData));
            _this.dartGameData.settings = (/** @type {?} */ (settings));
        });
        fileReader.readAsText(file.target.files[0]);
    };
    ExportImportDataPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-export-import-data-panel',
                    template: "<div class=\"col-xs-12 config-group\">\n    <button class=\"btn btn-primary col-xs-12 margin-bottom\" *ngIf=\"dartGameData && dartGameData.settings && dartGameData.settings.isGameActive\" (click)=\"saveGame()\">\n      {{'page.dartScoreBoard.game.export' | translate}}\n    </button>\n    <button class=\"btn btn-success col-xs-12\" (click)=\"loadGame()\">\n      {{'page.dartScoreBoard.game.import' | translate}}\n    </button>\n</div>\n<input class=\"btn btn-primary\" type=\"file\" accept=\"application/json\" style=\"display: none\" (change)=\"fileLoaded($event)\"\n       #loadGameButton/>\n",
                    styles: [".config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.margin-bottom{margin-bottom:.5rem}"]
                }] }
    ];
    /** @nocollapse */
    ExportImportDataPanelComponent.ctorParameters = function () { return []; };
    ExportImportDataPanelComponent.propDecorators = {
        importGameButton: [{ type: ViewChild, args: ['loadGameButton',] }],
        dartGameData: [{ type: Input }]
    };
    return ExportImportDataPanelComponent;
}());
export { ExportImportDataPanelComponent };
if (false) {
    /** @type {?} */
    ExportImportDataPanelComponent.prototype.importGameButton;
    /** @type {?} */
    ExportImportDataPanelComponent.prototype.dartGameData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LWJvYXJkLXBhbmVsL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC9leHBvcnQtaW1wb3J0LWRhdGEtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRWxEO0lBYUU7SUFBZ0IsQ0FBQzs7OztJQUVqQixpREFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7O0lBRU0saURBQVE7OztJQUFmOzs7WUFDUSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7O1lBQ2pDLFlBQVksR0FBRyxHQUFHO1FBQ3RCLFlBQVksSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqRixZQUFZLElBQUksMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzFHLFlBQVksSUFBSSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEcsWUFBWSxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFH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VSxHQUFHLFVBQVUsQ0FBQztZQUMxQyxLQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1lBQzVELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsS0FBSyxNQUFNLENBQUM7WUFDdkQsS0FBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztZQUM5RCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxRQUFRLEVBQTJCLENBQUM7WUFDakUsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsUUFBUSxFQUFnQixDQUFDO1FBQ3hELENBQUMsQ0FBQSxDQUFDO1FBQ0YsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQTFFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsZ21CQUF3RDs7aUJBRXpEOzs7OzttQ0FHRSxTQUFTLFNBQUMsZ0JBQWdCOytCQUcxQixLQUFLOztJQWtFUixxQ0FBQztDQUFBLEFBNUVELElBNEVDO1NBdkVZLDhCQUE4Qjs7O0lBRXpDLDBEQUNvQzs7SUFFcEMsc0RBQ2tDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhcnRHYW1lRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9kYXJ0LWdhbWUtZGF0YSc7XG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSAnLi4vY2xhc3Nlcy9nYW1lLXNldHR0aW5ncyc7XG5pbXBvcnQge1BsYXllckRhdGF9IGZyb20gJy4uL2NsYXNzZXMvcGxheWVyLWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXhwb3J0SW1wb3J0RGF0YVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdsb2FkR2FtZUJ1dHRvbicpXG4gIHB1YmxpYyBpbXBvcnRHYW1lQnV0dG9uOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkYXJ0R2FtZURhdGE6IERhcnRHYW1lRGF0YTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIHNhdmVHYW1lKCkge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IG9iamVjdFN0cmluZyA9ICd7JztcbiAgICBvYmplY3RTdHJpbmcgKz0gJ1wic2V0dGluZ3NcIjonICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MpICsgJywnO1xuICAgIG9iamVjdFN0cmluZyArPSAnXCJjdXJyZW50UGxheWVyTWFwS2V5c1wiOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXJ0R2FtZURhdGEuY3VycmVudFBsYXllck1hcEtleXMpICsgJywnO1xuICAgIG9iamVjdFN0cmluZyArPSAnXCJjdXJyZW50QWN0aXZlUGxheWVyXCI6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyKSArICcsJztcbiAgICBvYmplY3RTdHJpbmcgKz0gJ1wibGVnRmluaXNoZWRcIjogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkKSArICcsJztcbiAgICBvYmplY3RTdHJpbmcgKz0gJ1wiZ2FtZURhdGFcIjogWyc7XG4gICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20odGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEua2V5cygpKSkge1xuICAgICAgaWYgKCFpc0ZpcnN0KSB7XG4gICAgICAgIG9iamVjdFN0cmluZyArPSAnLCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBsaW5lID0gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXJ0R2FtZURhdGEuZ2FtZURhdGEuZ2V0KGtleSkpO1xuICAgICAgb2JqZWN0U3RyaW5nICs9ICd7XCJrZXlcIjogXCInICsga2V5ICsgJ1wiLCc7XG4gICAgICBvYmplY3RTdHJpbmcgKz0gJ1widmFsdWVcIjogJyArIGxpbmUgKyAnfSc7XG4gICAgfVxuICAgIG9iamVjdFN0cmluZyArPSAnXX0nO1xuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi11LCcgKyBlbmNvZGVVUklDb21wb25lbnQob2JqZWN0U3RyaW5nKSk7XG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2dhbWUtZGF0YS0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnLmpzb24nKTtcbiAgICBhLmNsaWNrKCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEdhbWUoKSB7XG4gICAgdGhpcy5pbXBvcnRHYW1lQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWxlTG9hZGVkKGZpbGU6IGFueSkge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGZpbGVSZWFkZXIucmVzdWx0IGFzIGFueTtcbiAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShkYXRhKS5zZXR0aW5ncztcbiAgICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVQbGF5ZXIgPSBKU09OLnBhcnNlKGRhdGEpLmN1cnJlbnRBY3RpdmVQbGF5ZXI7XG4gICAgICBjb25zdCBjdXJyZW50UGxheWVyTWFwS2V5cyA9IEpTT04ucGFyc2UoZGF0YSkuY3VycmVudFBsYXllck1hcEtleXM7XG4gICAgICBjb25zdCBsZWdGaW5pc2hlZCA9IEpTT04ucGFyc2UoZGF0YSkubGVnRmluaXNoZWQ7XG4gICAgICBjb25zdCBnYW1lRGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBQbGF5ZXJEYXRhPigpO1xuICAgICAgbGV0IHRocm93c0RvbmUgPSAwO1xuICAgICAgZm9yIChjb25zdCBnYW1lRGF0YU9iamVjdCBvZiBKU09OLnBhcnNlKGRhdGEpLmdhbWVEYXRhKSB7XG4gICAgICAgIGNvbnN0IGdhbWVFbnRyeSA9IG5ldyBQbGF5ZXJEYXRhKCk7XG4gICAgICAgIGdhbWVFbnRyeS5jdXJyZW50TGVnLnNjb3JlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHNjb3JlIG9mIGdhbWVEYXRhT2JqZWN0LnZhbHVlLmN1cnJlbnRMZWcuc2NvcmVzKSB7XG4gICAgICAgICAgZ2FtZUVudHJ5LmN1cnJlbnRMZWcuc2NvcmVzLnB1c2goc2NvcmUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93c0RvbmUgKz0gZ2FtZUVudHJ5LmN1cnJlbnRMZWcuc2NvcmVzLmxlbmd0aDtcbiAgICAgICAgZ2FtZURhdGEuc2V0KGdhbWVEYXRhT2JqZWN0LmtleSwgZ2FtZURhdGFPYmplY3QudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEudGhyb3dzRG9uZSA9IHRocm93c0RvbmU7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5jdXJyZW50QWN0aXZlUGxheWVyID0gY3VycmVudEFjdGl2ZVBsYXllcjtcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmxlZ0ZpbmlzaGVkID0gbGVnRmluaXNoZWQgPT09ICd0cnVlJztcbiAgICAgIHRoaXMuZGFydEdhbWVEYXRhLmN1cnJlbnRQbGF5ZXJNYXBLZXlzID0gY3VycmVudFBsYXllck1hcEtleXM7XG4gICAgICB0aGlzLmRhcnRHYW1lRGF0YS5nYW1lRGF0YSA9IGdhbWVEYXRhIGFzIE1hcDxzdHJpbmcsIFBsYXllckRhdGE+O1xuICAgICAgdGhpcy5kYXJ0R2FtZURhdGEuc2V0dGluZ3MgPSBzZXR0aW5ncyBhcyBHYW1lU2V0dGluZ3M7XG4gICAgfTtcbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZS50YXJnZXQuZmlsZXNbMF0pO1xuICB9XG5cbn1cbiJdfQ==