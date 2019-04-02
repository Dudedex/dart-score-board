/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { De } from './de';
import { En } from './en';
var TranslationProvider = /** @class */ (function () {
    function TranslationProvider() {
    }
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    TranslationProvider.setupTranslationProvider = /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    function (translate, defaultLocale) {
        translate.setTranslation('de', De.translation(), true);
        translate.setTranslation('en', En.translation(), true);
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('en');
        }
    };
    return TranslationProvider;
}());
export { TranslationProvider };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXhCO0lBQUE7SUFVQSxDQUFDOzs7Ozs7SUFUZSw0Q0FBd0I7Ozs7O0lBQXRDLFVBQXVDLFNBQTJCLEVBQUUsYUFBc0I7UUFDeEYsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLGFBQWEsRUFBRTtZQUNqQixTQUFTLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQge0RlfSBmcm9tICcuL2RlJztcclxuaW1wb3J0IHtFbn0gZnJvbSAnLi9lbic7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25Qcm92aWRlciB7XHJcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYW5zbGF0aW9uUHJvdmlkZXIodHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBkZWZhdWx0TG9jYWxlPzogc3RyaW5nKSB7XHJcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2RlJywgRGUudHJhbnNsYXRpb24oKSwgdHJ1ZSk7XHJcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2VuJywgRW4udHJhbnNsYXRpb24oKSwgdHJ1ZSk7XHJcbiAgICBpZiAoZGVmYXVsdExvY2FsZSkge1xyXG4gICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoZGVmYXVsdExvY2FsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoJ2VuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==