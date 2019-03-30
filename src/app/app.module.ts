import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DartBoardPanelComponent } from './dart-board-panel/dart-board-panel.component';
import { DartBoardComponent } from './dart-board-panel/dart-board/dart-board.component';
import { ScorePanelComponent } from './dart-board-panel/score-panel/score-panel.component';
import { TutorialPanelComponent } from './dart-board-panel/tutorial-panel/tutorial-panel.component';
import { SetupPanelComponent } from './dart-board-panel/setup-panel/setup-panel.component';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    DartBoardPanelComponent,
    DartBoardComponent,
    ScorePanelComponent,
    TutorialPanelComponent,
    SetupPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
