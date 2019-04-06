/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { De } from './de';
import { En } from './en';
export class TranslationProvider {
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    static setupTranslationProvider(translate, defaultLocale) {
        translate.setTranslation('de', De.translation(), true);
        translate.setTranslation('en', En.translation(), true);
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('de');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvZGFydC1ib2FyZC1wYW5lbC90cmFuc2xhdGlvbi90cmFuc2xhdGlvbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLEVBQUMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUN2QixNQUFNLENBQUMsd0JBQXdCLENBQUMsU0FBMkIsRUFBRSxhQUFzQjtRQUN4RixTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELElBQUksYUFBYSxFQUFFO1lBQ2pCLFNBQVMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtEZX0gZnJvbSAnLi9kZSc7XG5pbXBvcnQge0VufSBmcm9tICcuL2VuJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uUHJvdmlkZXIge1xuICBwdWJsaWMgc3RhdGljIHNldHVwVHJhbnNsYXRpb25Qcm92aWRlcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmcpIHtcbiAgICB0cmFuc2xhdGUuc2V0VHJhbnNsYXRpb24oJ2RlJywgRGUudHJhbnNsYXRpb24oKSwgdHJ1ZSk7XG4gICAgdHJhbnNsYXRlLnNldFRyYW5zbGF0aW9uKCdlbicsIEVuLnRyYW5zbGF0aW9uKCksIHRydWUpO1xuICAgIGlmIChkZWZhdWx0TG9jYWxlKSB7XG4gICAgICB0cmFuc2xhdGUuc2V0RGVmYXVsdExhbmcoZGVmYXVsdExvY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZygnZGUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==