import { NgModule } from '@angular/core';
import { DartScoreBoardLibraryComponent } from './dart-score-board-library.component';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {TranslateModule} from '@ngx-translate/core';
import {ExportImportDataPanelComponent} from './dart-board-panel/export-import-data-panel/export-import-data-panel.component';
import {GamePanelComponent} from './dart-board-panel/game-panel/game-panel.component';
import {SetupPanelComponent} from './dart-board-panel/setup-panel/setup-panel.component';
import {ScorePanelComponent} from './dart-board-panel/score-panel/score-panel.component';
import {DartBoardComponent} from './dart-board-panel/dart-board/dart-board.component';
import {DartBoardPanelComponent} from './dart-board-panel/dart-board-panel.component';

@NgModule({
  declarations: [
    DartScoreBoardLibraryComponent,
    DartBoardPanelComponent,
    DartBoardComponent,
    ScorePanelComponent,
    SetupPanelComponent,
    GamePanelComponent,
    ExportImportDataPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    DragDropModule,
    TranslateModule.forRoot()
  ],
  exports: [DartScoreBoardLibraryComponent]
})
export class DartScoreBoardLibraryModule { }
