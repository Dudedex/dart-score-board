import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TranslationProvider} from './dart-board-panel/translation/translation-provider';

@Component({
  selector: 'lib-dart-score-board-library',
  template: `
    <app-dart-board-panel></app-dart-board-panel>
  `,
  styles: []
})
export class DartScoreBoardLibraryComponent implements OnInit, OnChanges {

  @Input()
  public locale: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translationSetup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.translationSetup();
  }

  private translationSetup() {
    TranslationProvider.setupTranslationProvider(this.translate, this.locale);
  }

}
