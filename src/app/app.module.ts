import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import {DartScoreBoardLibraryModule} from '../../projects/dart-score-board-library/src/lib/dart-score-board-library.module';
import {ScoreService} from '../../projects/dart-score-board-library/src/lib/dart-board-panel/services/score.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DartScoreBoardLibraryModule,
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    DragDropModule,
    TranslateModule.forRoot()
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
