/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './dart-board-panel/translation/translation-provider';
var DartScoreBoardLibraryComponent = /** @class */ (function () {
    function DartScoreBoardLibraryComponent(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    DartScoreBoardLibraryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.translationSetup();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DartScoreBoardLibraryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.translationSetup();
    };
    /**
     * @private
     * @return {?}
     */
    DartScoreBoardLibraryComponent.prototype.translationSetup = /**
     * @private
     * @return {?}
     */
    function () {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    };
    DartScoreBoardLibraryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dart-score-board-library',
                    template: "\n    <app-dart-board-panel></app-dart-board-panel>\n  "
                }] }
    ];
    /** @nocollapse */
    DartScoreBoardLibraryComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    DartScoreBoardLibraryComponent.propDecorators = {
        locale: [{ type: Input }]
    };
    return DartScoreBoardLibraryComponent;
}());
export { DartScoreBoardLibraryComponent };
if (false) {
    /** @type {?} */
    DartScoreBoardLibraryComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    DartScoreBoardLibraryComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFFeEY7SUFZRSx3Q0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBSSxDQUFDOzs7O0lBRXBELGlEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsb0RBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8seURBQWdCOzs7O0lBQXhCO1FBQ0UsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUseURBRVQ7aUJBRUY7Ozs7Z0JBVE8sZ0JBQWdCOzs7eUJBWXJCLEtBQUs7O0lBaUJSLHFDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FuQlksOEJBQThCOzs7SUFFekMsZ0RBQ3NCOzs7OztJQUVWLG1EQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRpb25Qcm92aWRlcn0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLXByb3ZpZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhcnQtc2NvcmUtYm9hcmQtbGlicmFyeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFwcC1kYXJ0LWJvYXJkLXBhbmVsPjwvYXBwLWRhcnQtYm9hcmQtcGFuZWw+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGFydFNjb3JlQm9hcmRMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2xhdGlvblNldHVwKCk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0aW9uU2V0dXAoKSB7XG4gICAgVHJhbnNsYXRpb25Qcm92aWRlci5zZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodGhpcy50cmFuc2xhdGUsIHRoaXMubG9jYWxlKTtcbiAgfVxuXG59XG4iXX0=