/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LegData } from '../classes/leg-data';
import { ScoreService } from '../services/score.service';
export class ScorePanelComponent {
    /**
     * @param {?} scoreService
     */
    constructor(scoreService) {
        this.scoreService = scoreService;
        this.displayDetails = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayDetails = this.isActive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.isActive) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.displayDetails = this.isActive;
                this.scrollToScoreBottom();
            }), 1000);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getPendingScores(index) {
        return this.scoreService.getPendingScores(index, this.legData.scores, this.requiredScore);
    }
    /**
     * @param {?} score
     * @return {?}
     */
    getScoreDisplay(score) {
        if (score <= 0) {
            return '00';
        }
        if (score < 10) {
            return '0' + score;
        }
        return score;
    }
    /**
     * @return {?}
     */
    get3DartAverage() {
        /** @type {?} */
        const numberOfCompleteSets = Math.floor(this.legData.scores.length / 3);
        if (numberOfCompleteSets <= 0) {
            return '(--)';
        }
        /** @type {?} */
        const score = this.getPendingScores(numberOfCompleteSets * 3 - 1);
        return (this.requiredScore - score) / numberOfCompleteSets;
    }
    /**
     * @return {?}
     */
    getSingleDartAverage() {
        if (this.legData.scores.length === 0) {
            return '(--)';
        }
        /** @type {?} */
        const score = this.getPendingScores(this.legData.scores.length - 1);
        return (this.requiredScore - score) / (this.legData.scores.length);
    }
    /**
     * @return {?}
     */
    triggerDisplayDetails() {
        this.displayDetails = !this.displayDetails;
        this.scrollToScoreBottom();
    }
    /**
     * @return {?}
     */
    scrollToScoreBottom() {
        this.scoreEntryPanel.nativeElement.scrollTop = this.scoreEntryPanel.nativeElement.scrollHeight;
    }
}
ScorePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-score-panel',
                template: "<div class=\"no-border no-padding relative col-xs-12 {{ isActive ? 'player-active' : 'player-inactive'}}\" *ngIf=\"legData\">\n  <div class=\"winning-border alert-success\" *ngIf=\"legData.finishedTime\"></div>\n  <div class=\"score-panel\">\n    <div class=\"arrow-container\" *ngIf=\"isActive\">\n    </div>\n    <div class=\"player-name col-xs-8 text-left\">\n      <strong>{{playerName}}</strong>\n    </div>\n    <div class=\"player-score col-xs-4 text-right\">\n      <strong>{{getPendingScores(legData.scores.length - 1)}}</strong>\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-left\" (click)=\"triggerDisplayDetails()\">\n      <ng-container *ngIf=\"!displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}} upside-down\">\n      </ng-container>\n      <ng-container *ngIf=\"displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}}\">\n      </ng-container>\n      {{'page.dartScoreBoard.score.details' | translate}}\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-right\">\n      {{'page.dartScoreBoard.score.numberOfDarts' | translate}}: {{legData.scores.length}}\n    </div>\n    <div class=\"player-details-{{displayDetails  ? 'show' : 'hidden'}} col-xs-12 no-padding fixed-font-height\">\n      <hr>\n      <div class=\"col-xs-7 no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.stats' | translate}}\n        </h4>\n        <hr>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.average' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"get3DartAverage() !== '(--)'\">\n              <strong>{{get3DartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"get3DartAverage() === '(--)'\">\n              <strong>{{get3DartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.dartAverage' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"getSingleDartAverage() !== '(--)'\">\n              <strong>{{getSingleDartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"getSingleDartAverage() === '(--)'\">\n              <strong>{{getSingleDartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n      </div>\n      <div class=\"col-xs-4 right no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.throws' | translate}}\n        </h4>\n        <hr>\n        <div class=\"score-entry-panel\" #scoreEntryPanel>\n          <div class=\"score-entry\" *ngFor=\"let score of legData.scores; let i = index\">\n            <div\n              class=\"col-xs-12 no-padding {{!score.isValid ? 'alert-danger' : ''}} {{getPendingScores(i) === 0 ? 'alert-success': ''}}\">\n              <div class=\"col-xs-6 text-right no-padding\"><strong>{{getPendingScores(i)}}</strong></div>\n              <div class=\"col-xs-6 text-right no-padding\">({{getScoreDisplay(score.total)}})</div>\n            </div>\n          </div>\n          <div id=\"score-bottom-{{playerName}}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["hr{margin:0;color:#000}.text-right{text-align:right}.text-left{text-align:left}.score-panel{padding:.5rem}.relative{position:relative}.score-entry-panel{height:11rem!important;overflow-y:scroll}.overflow-hidden{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player-details-show{height:16rem;overflow-y:hidden;transition:.5s}.player-details-hidden{height:0;padding-top:0;overflow-y:hidden;transition:.5s}.fixed-font-height{font-size:16px}.text-center{text-align:center}.fixed{position:fixed;top:0}.arrow-container{position:absolute;left:0;width:0;top:0;height:0;border-style:solid;border-width:34px 0 34px 12px;border-color:transparent transparent transparent #00f}.menu-icon-inactive{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:16px;margin-top:-2px;margin-right:.5rem}.menu-icon-active{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:24px;margin-top:-5px;margin-right:.5rem}.upside-down{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.winning-border{position:absolute;top:0;right:0;left:0;bottom:0}.no-padding{padding:0}.no-margin{margin:0}.player-active{font-size:24px;border:2px solid #00f;border-radius:5px;margin-bottom:.5rem}.player-inactive{border-radius:5px;border:2px solid #e0e0e0;margin-bottom:.5rem}.right{float:right}"]
            }] }
];
/** @nocollapse */
ScorePanelComponent.ctorParameters = () => [
    { type: ScoreService }
];
ScorePanelComponent.propDecorators = {
    legData: [{ type: Input }],
    playerName: [{ type: Input }],
    requiredScore: [{ type: Input }],
    isActive: [{ type: Input }],
    scoreEntryPanel: [{ type: ViewChild, args: ['scoreEntryPanel',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmUtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2RhcnQtYm9hcmQtcGFuZWwvc2NvcmUtcGFuZWwvc2NvcmUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFNUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBT3ZELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFrQjlCLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnZDLG1CQUFjLEdBQVksS0FBSyxDQUFDO0lBR3ZDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUNwQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7Ozs7O0lBRU0sZ0JBQWdCLENBQUMsS0FBYTtRQUNuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7OztJQUVNLGVBQWUsQ0FBQyxLQUFhO1FBQ2xDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDZCxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFTSxlQUFlOztjQUNkLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2RSxJQUFJLG9CQUFvQixJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLE1BQU0sQ0FBQztTQUNmOztjQUNLLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztJQUM3RCxDQUFDOzs7O0lBRU0sb0JBQW9CO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQyxPQUFPLE1BQU0sQ0FBQztTQUNmOztjQUNLLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ2pHLENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0Isa3BIQUEyQzs7YUFFNUM7Ozs7WUFOTyxZQUFZOzs7c0JBUWpCLEtBQUs7eUJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7OEJBR0wsU0FBUyxTQUFDLGlCQUFpQjs7OztJQVo1QixzQ0FDd0I7O0lBRXhCLHlDQUMwQjs7SUFFMUIsNENBQzZCOztJQUU3Qix1Q0FDeUI7O0lBRXpCLDhDQUNtQzs7SUFFbkMsNkNBQXVDOzs7OztJQUUzQiwyQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQbGF5ZXJEYXRhfSBmcm9tICcuLi9jbGFzc2VzL3BsYXllci1kYXRhJztcbmltcG9ydCB7TGVnRGF0YX0gZnJvbSAnLi4vY2xhc3Nlcy9sZWctZGF0YSc7XG5pbXBvcnQge1Njb3JlRW50cnl9IGZyb20gJy4uL2NsYXNzZXMvc2NvcmUtZW50cnknO1xuaW1wb3J0IHtTY29yZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2NvcmUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NvcmUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zY29yZS1wYW5lbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NvcmVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcHVibGljIGxlZ0RhdGE6IExlZ0RhdGE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBsYXllck5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcmVxdWlyZWRTY29yZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdzY29yZUVudHJ5UGFuZWwnKVxuICBwdWJsaWMgc2NvcmVFbnRyeVBhbmVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBkaXNwbGF5RGV0YWlsczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NvcmVTZXJ2aWNlOiBTY29yZVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzcGxheURldGFpbHMgPSB0aGlzLmlzQWN0aXZlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmlzQWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNwbGF5RGV0YWlscyA9IHRoaXMuaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9TY29yZUJvdHRvbSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFBlbmRpbmdTY29yZXMoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnNjb3JlU2VydmljZS5nZXRQZW5kaW5nU2NvcmVzKGluZGV4LCB0aGlzLmxlZ0RhdGEuc2NvcmVzLCB0aGlzLnJlcXVpcmVkU2NvcmUpO1xuICB9XG5cbiAgcHVibGljIGdldFNjb3JlRGlzcGxheShzY29yZTogbnVtYmVyKSB7XG4gICAgaWYgKHNjb3JlIDw9IDApIHtcbiAgICAgIHJldHVybiAnMDAnO1xuICAgIH1cbiAgICBpZiAoc2NvcmUgPCAxMCkge1xuICAgICAgcmV0dXJuICcwJyArIHNjb3JlO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0M0RhcnRBdmVyYWdlKCkge1xuICAgIGNvbnN0IG51bWJlck9mQ29tcGxldGVTZXRzID0gTWF0aC5mbG9vcih0aGlzLmxlZ0RhdGEuc2NvcmVzLmxlbmd0aCAvIDMpO1xuICAgIGlmIChudW1iZXJPZkNvbXBsZXRlU2V0cyA8PSAwKSB7XG4gICAgICByZXR1cm4gJygtLSknO1xuICAgIH1cbiAgICBjb25zdCBzY29yZSA9IHRoaXMuZ2V0UGVuZGluZ1Njb3JlcyhudW1iZXJPZkNvbXBsZXRlU2V0cyAqIDMgLSAxKTtcbiAgICByZXR1cm4gKHRoaXMucmVxdWlyZWRTY29yZSAtIHNjb3JlKSAvIG51bWJlck9mQ29tcGxldGVTZXRzO1xuICB9XG5cbiAgcHVibGljIGdldFNpbmdsZURhcnRBdmVyYWdlKCkge1xuICAgIGlmICh0aGlzLmxlZ0RhdGEuc2NvcmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuICcoLS0pJztcbiAgICB9XG4gICAgY29uc3Qgc2NvcmUgPSB0aGlzLmdldFBlbmRpbmdTY29yZXModGhpcy5sZWdEYXRhLnNjb3Jlcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gKHRoaXMucmVxdWlyZWRTY29yZSAtIHNjb3JlKSAvICh0aGlzLmxlZ0RhdGEuc2NvcmVzLmxlbmd0aCk7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckRpc3BsYXlEZXRhaWxzKCkge1xuICAgIHRoaXMuZGlzcGxheURldGFpbHMgPSAhdGhpcy5kaXNwbGF5RGV0YWlscztcbiAgICB0aGlzLnNjcm9sbFRvU2NvcmVCb3R0b20oKTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxUb1Njb3JlQm90dG9tKCkge1xuICAgIHRoaXMuc2NvcmVFbnRyeVBhbmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5zY29yZUVudHJ5UGFuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==