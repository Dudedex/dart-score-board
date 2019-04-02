/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationProvider } from './dart-board-panel/translation/translation-provider';
export class DartScoreBoardLibraryComponent {
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
        this.translationSetup();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.translationSetup();
    }
    /**
     * @private
     * @return {?}
     */
    translationSetup() {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
}
DartScoreBoardLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-dart-score-board-library',
                template: `
    <app-dart-board-panel></app-dart-board-panel>
  `
            }] }
];
/** @nocollapse */
DartScoreBoardLibraryComponent.ctorParameters = () => [
    { type: TranslateService }
];
DartScoreBoardLibraryComponent.propDecorators = {
    locale: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DartScoreBoardLibraryComponent.prototype.locale;
    /**
     * @type {?}
     * @private
     */
    DartScoreBoardLibraryComponent.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFTeEYsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUt6QyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFJLENBQUM7Ozs7SUFFcEQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOztHQUVUO2FBRUY7Ozs7WUFUTyxnQkFBZ0I7OztxQkFZckIsS0FBSzs7OztJQUFOLGdEQUNzQjs7Ozs7SUFFVixtREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0aW9uUHJvdmlkZXJ9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhcHAtZGFydC1ib2FyZC1wYW5lbD48L2FwcC1kYXJ0LWJvYXJkLXBhbmVsPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhcnRTY29yZUJvYXJkTGlicmFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNsYXRpb25TZXR1cCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGlvblNldHVwKCkge1xuICAgIFRyYW5zbGF0aW9uUHJvdmlkZXIuc2V0dXBUcmFuc2xhdGlvblByb3ZpZGVyKHRoaXMudHJhbnNsYXRlLCB0aGlzLmxvY2FsZSk7XG4gIH1cblxufVxuIl19