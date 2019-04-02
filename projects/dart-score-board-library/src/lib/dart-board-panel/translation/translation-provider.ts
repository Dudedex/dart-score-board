import {TranslateService} from '@ngx-translate/core';
import {De} from './de';
import {En} from './en';

export class TranslationProvider {
  public static setupTranslationProvider(translate: TranslateService, defaultLocale?: string) {
    translate.setTranslation('de', De.translation(), true);
    translate.setTranslation('en', En.translation(), true);
    if (defaultLocale) {
      translate.setDefaultLang(defaultLocale);
    } else {
      translate.setDefaultLang('de');
    }
  }
}
