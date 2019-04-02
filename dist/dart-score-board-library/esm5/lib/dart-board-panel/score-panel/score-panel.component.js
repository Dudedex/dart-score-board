/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LegData } from '../classes/leg-data';
import { ScoreService } from '../services/score.service';
var ScorePanelComponent = /** @class */ (function () {
    function ScorePanelComponent(scoreService) {
        this.scoreService = scoreService;
        this.displayDetails = false;
    }
    /**
     * @return {?}
     */
    ScorePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.displayDetails = this.isActive;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ScorePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.isActive) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.displayDetails = _this.isActive;
                _this.scrollToScoreBottom();
            }), 1000);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ScorePanelComponent.prototype.getPendingScores = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.scoreService.getPendingScores(index, this.legData.scores, this.requiredScore);
    };
    /**
     * @param {?} score
     * @return {?}
     */
    ScorePanelComponent.prototype.getScoreDisplay = /**
     * @param {?} score
     * @return {?}
     */
    function (score) {
        if (score <= 0) {
            return '00';
        }
        if (score < 10) {
            return '0' + score;
        }
        return score;
    };
    /**
     * @return {?}
     */
    ScorePanelComponent.prototype.get3DartAverage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numberOfCompleteSets = Math.floor(this.legData.scores.length / 3);
        if (numberOfCompleteSets <= 0) {
            return '(--)';
        }
        /** @type {?} */
        var score = this.getPendingScores(numberOfCompleteSets * 3 - 1);
        return (this.requiredScore - score) / numberOfCompleteSets;
    };
    /**
     * @return {?}
     */
    ScorePanelComponent.prototype.getSingleDartAverage = /**
     * @return {?}
     */
    function () {
        if (this.legData.scores.length === 0) {
            return '(--)';
        }
        /** @type {?} */
        var score = this.getPendingScores(this.legData.scores.length - 1);
        return (this.requiredScore - score) / (this.legData.scores.length);
    };
    /**
     * @return {?}
     */
    ScorePanelComponent.prototype.triggerDisplayDetails = /**
     * @return {?}
     */
    function () {
        this.displayDetails = !this.displayDetails;
        this.scrollToScoreBottom();
    };
    /**
     * @return {?}
     */
    ScorePanelComponent.prototype.scrollToScoreBottom = /**
     * @return {?}
     */
    function () {
        this.scoreEntryPanel.nativeElement.scrollTop = this.scoreEntryPanel.nativeElement.scrollHeight;
    };
    ScorePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-score-panel',
                    template: "<div class=\"no-border no-padding relative col-xs-12 {{ isActive ? 'player-active' : 'player-inactive'}}\" *ngIf=\"legData\">\n  <div class=\"winning-border alert-success\" *ngIf=\"legData.finishedTime\"></div>\n  <div class=\"score-panel\">\n    <div class=\"arrow-container\" *ngIf=\"isActive\">\n    </div>\n    <div class=\"player-name col-xs-8 text-left\">\n      <strong>{{playerName}}</strong>\n    </div>\n    <div class=\"player-score col-xs-4 text-right\">\n      <strong>{{getPendingScores(legData.scores.length - 1)}}</strong>\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-left\" (click)=\"triggerDisplayDetails()\">\n      <ng-container *ngIf=\"!displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}} upside-down\">\n      </ng-container>\n      <ng-container *ngIf=\"displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}}\">\n      </ng-container>\n      {{'page.dartScoreBoard.score.details' | translate}}\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-right\">\n      {{'page.dartScoreBoard.score.numberOfDarts' | translate}}: {{legData.scores.length}}\n    </div>\n    <div class=\"player-details-{{displayDetails  ? 'show' : 'hidden'}} col-xs-12 no-padding fixed-font-height\">\n      <hr>\n      <div class=\"col-xs-7 no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.stats' | translate}}\n        </h4>\n        <hr>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.average' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"get3DartAverage() !== '(--)'\">\n              <strong>{{get3DartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"get3DartAverage() === '(--)'\">\n              <strong>{{get3DartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.dartAverage' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"getSingleDartAverage() !== '(--)'\">\n              <strong>{{getSingleDartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"getSingleDartAverage() === '(--)'\">\n              <strong>{{getSingleDartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n      </div>\n      <div class=\"col-xs-4 right no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.throws' | translate}}\n        </h4>\n        <hr>\n        <div class=\"score-entry-panel\" #scoreEntryPanel>\n          <div class=\"score-entry\" *ngFor=\"let score of legData.scores; let i = index\">\n            <div\n              class=\"col-xs-12 no-padding {{!score.isValid ? 'alert-danger' : ''}} {{getPendingScores(i) === 0 ? 'alert-success': ''}}\">\n              <div class=\"col-xs-6 text-right no-padding\"><strong>{{getPendingScores(i)}}</strong></div>\n              <div class=\"col-xs-6 text-right no-padding\">({{getScoreDisplay(score.total)}})</div>\n            </div>\n          </div>\n          <div id=\"score-bottom-{{playerName}}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: ["hr{margin:0;color:#000}.text-right{text-align:right}.text-left{text-align:left}.score-panel{padding:.5rem}.relative{position:relative}.score-entry-panel{height:11rem!important;overflow-y:scroll}.overflow-hidden{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player-details-show{height:16rem;transition:.5s}.player-details-hidden{height:0;padding-top:0;overflow-y:hidden;transition:.5s}.fixed-font-height{font-size:16px}.text-center{text-align:center}.fixed{position:fixed;top:0}.arrow-container{position:absolute;left:0;width:0;top:0;height:0;border-style:solid;border-width:34px 0 34px 12px;border-color:transparent transparent transparent #00f}.menu-icon-inactive{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:16px;margin-top:-2px;margin-right:.5rem}.menu-icon-active{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:24px;margin-top:-5px;margin-right:.5rem}.upside-down{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.winning-border{position:absolute;top:0;right:0;left:0;bottom:0}.no-padding{padding:0}.no-margin{margin:0}.player-active{font-size:24px;border:2px solid #00f;border-radius:5px;margin-bottom:.5rem}.player-inactive{border-radius:5px;border:2px solid #e0e0e0;margin-bottom:.5rem}.right{float:right}"]
                }] }
    ];
    /** @nocollapse */
    ScorePanelComponent.ctorParameters = function () { return [
        { type: ScoreService }
    ]; };
    ScorePanelComponent.propDecorators = {
        legData: [{ type: Input }],
        playerName: [{ type: Input }],
        requiredScore: [{ type: Input }],
        isActive: [{ type: Input }],
        scoreEntryPanel: [{ type: ViewChild, args: ['scoreEntryPanel',] }]
    };
    return ScorePanelComponent;
}());
export { ScorePanelComponent };
if (false) {
    /** @type {?} */
    ScorePanelComponent.prototype.legData;
    /** @type {?} */
    ScorePanelComponent.prototype.playerName;
    /** @type {?} */
    ScorePanelComponent.prototype.requiredScore;
    /** @type {?} */
    ScorePanelComponent.prototype.isActive;
    /** @type {?} */
    ScorePanelComponent.prototype.scoreEntryPanel;
    /** @type {?} */
    ScorePanelComponent.prototype.displayDetails;
    /**
     * @type {?}
     * @private
     */
    ScorePanelComponent.prototype.scoreService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2NvcmUtcGFuZWwvc2NvcmUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXZEO0lBdUJFLDZCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUZ2QyxtQkFBYyxHQUFZLEtBQUssQ0FBQztJQUd2QyxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQU9DO1FBTkMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDOzs7OztJQUVNLDhDQUFnQjs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7O0lBRU0sNkNBQWU7Ozs7SUFBdEIsVUFBdUIsS0FBYTtRQUNsQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQ2QsT0FBTyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7O0lBRU0sNkNBQWU7OztJQUF0Qjs7WUFDUSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxNQUFNLENBQUM7U0FDZjs7WUFDSyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsb0JBQW9CLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVNLGtEQUFvQjs7O0lBQTNCO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7O1lBQ0ssS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVNLG1EQUFxQjs7O0lBQTVCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLGlEQUFtQjs7O0lBQTFCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUNqRyxDQUFDOztnQkE3RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGtwSEFBMkM7O2lCQUU1Qzs7OztnQkFOTyxZQUFZOzs7MEJBUWpCLEtBQUs7NkJBR0wsS0FBSztnQ0FHTCxLQUFLOzJCQUdMLEtBQUs7a0NBR0wsU0FBUyxTQUFDLGlCQUFpQjs7SUE0RDlCLDBCQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0F6RVksbUJBQW1COzs7SUFDOUIsc0NBQ3dCOztJQUV4Qix5Q0FDMEI7O0lBRTFCLDRDQUM2Qjs7SUFFN0IsdUNBQ3lCOztJQUV6Qiw4Q0FDbUM7O0lBRW5DLDZDQUF1Qzs7Ozs7SUFFM0IsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGxheWVyRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9wbGF5ZXItZGF0YSc7XG5pbXBvcnQge0xlZ0RhdGF9IGZyb20gJy4uL2NsYXNzZXMvbGVnLWRhdGEnO1xuaW1wb3J0IHtTY29yZUVudHJ5fSBmcm9tICcuLi9jbGFzc2VzL3Njb3JlLWVudHJ5JztcbmltcG9ydCB7U2NvcmVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9zY29yZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNjb3JlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Njb3JlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NvcmUtcGFuZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNjb3JlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsZWdEYXRhOiBMZWdEYXRhO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwbGF5ZXJOYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJlcXVpcmVkU2NvcmU6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnc2NvcmVFbnRyeVBhbmVsJylcbiAgcHVibGljIHNjb3JlRW50cnlQYW5lbDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgZGlzcGxheURldGFpbHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjb3JlU2VydmljZTogU2NvcmVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc3BsYXlEZXRhaWxzID0gdGhpcy5pc0FjdGl2ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5pc0FjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGxheURldGFpbHMgPSB0aGlzLmlzQWN0aXZlO1xuICAgICAgICB0aGlzLnNjcm9sbFRvU2NvcmVCb3R0b20oKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRQZW5kaW5nU2NvcmVzKGluZGV4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZVNlcnZpY2UuZ2V0UGVuZGluZ1Njb3JlcyhpbmRleCwgdGhpcy5sZWdEYXRhLnNjb3JlcywgdGhpcy5yZXF1aXJlZFNjb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTY29yZURpc3BsYXkoc2NvcmU6IG51bWJlcikge1xuICAgIGlmIChzY29yZSA8PSAwKSB7XG4gICAgICByZXR1cm4gJzAwJztcbiAgICB9XG4gICAgaWYgKHNjb3JlIDwgMTApIHtcbiAgICAgIHJldHVybiAnMCcgKyBzY29yZTtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3JlO1xuICB9XG5cbiAgcHVibGljIGdldDNEYXJ0QXZlcmFnZSgpIHtcbiAgICBjb25zdCBudW1iZXJPZkNvbXBsZXRlU2V0cyA9IE1hdGguZmxvb3IodGhpcy5sZWdEYXRhLnNjb3Jlcy5sZW5ndGggLyAzKTtcbiAgICBpZiAobnVtYmVyT2ZDb21wbGV0ZVNldHMgPD0gMCkge1xuICAgICAgcmV0dXJuICcoLS0pJztcbiAgICB9XG4gICAgY29uc3Qgc2NvcmUgPSB0aGlzLmdldFBlbmRpbmdTY29yZXMobnVtYmVyT2ZDb21wbGV0ZVNldHMgKiAzIC0gMSk7XG4gICAgcmV0dXJuICh0aGlzLnJlcXVpcmVkU2NvcmUgLSBzY29yZSkgLyBudW1iZXJPZkNvbXBsZXRlU2V0cztcbiAgfVxuXG4gIHB1YmxpYyBnZXRTaW5nbGVEYXJ0QXZlcmFnZSgpIHtcbiAgICBpZiAodGhpcy5sZWdEYXRhLnNjb3Jlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnKC0tKSc7XG4gICAgfVxuICAgIGNvbnN0IHNjb3JlID0gdGhpcy5nZXRQZW5kaW5nU2NvcmVzKHRoaXMubGVnRGF0YS5zY29yZXMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuICh0aGlzLnJlcXVpcmVkU2NvcmUgLSBzY29yZSkgLyAodGhpcy5sZWdEYXRhLnNjb3Jlcy5sZW5ndGgpO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJEaXNwbGF5RGV0YWlscygpIHtcbiAgICB0aGlzLmRpc3BsYXlEZXRhaWxzID0gIXRoaXMuZGlzcGxheURldGFpbHM7XG4gICAgdGhpcy5zY3JvbGxUb1Njb3JlQm90dG9tKCk7XG4gIH1cblxuICBwdWJsaWMgc2Nyb2xsVG9TY29yZUJvdHRvbSgpIHtcbiAgICB0aGlzLnNjb3JlRW50cnlQYW5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuc2NvcmVFbnRyeVBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG59XG4iXX0=