/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DartScoreBoardLibraryComponent } from './dart-score-board-library.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { ExportImportDataPanelComponent } from './dart-board-panel/export-import-data-panel/export-import-data-panel.component';
import { GamePanelComponent } from './dart-board-panel/game-panel/game-panel.component';
import { SetupPanelComponent } from './dart-board-panel/setup-panel/setup-panel.component';
import { ScorePanelComponent } from './dart-board-panel/score-panel/score-panel.component';
import { DartBoardComponent } from './dart-board-panel/dart-board/dart-board.component';
import { DartBoardPanelComponent } from './dart-board-panel/dart-board-panel.component';
var DartScoreBoardLibraryModule = /** @class */ (function () {
    function DartScoreBoardLibraryModule() {
    }
    DartScoreBoardLibraryModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return DartScoreBoardLibraryModule;
}());
export { DartScoreBoardLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sZ0ZBQWdGLENBQUM7QUFDOUgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0RBQXNELENBQUM7QUFDekYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFDdEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFdEY7SUFBQTtJQXFCMkMsQ0FBQzs7Z0JBckIzQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDhCQUE4Qjt3QkFDOUIsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLDhCQUE4QjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNELE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUMxQzs7SUFDMEMsa0NBQUM7Q0FBQSxBQXJCNUMsSUFxQjRDO1NBQS9CLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXJ0U2NvcmVCb2FyZExpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QW5ndWxhclN2Z0ljb25Nb2R1bGV9IGZyb20gJ2FuZ3VsYXItc3ZnLWljb24nO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtFeHBvcnRJbXBvcnREYXRhUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9leHBvcnQtaW1wb3J0LWRhdGEtcGFuZWwvZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0dhbWVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL2dhbWUtcGFuZWwvZ2FtZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZXR1cFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvc2V0dXAtcGFuZWwvc2V0dXAtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7U2NvcmVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL3Njb3JlLXBhbmVsL3Njb3JlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhcnRCb2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL2RhcnQtYm9hcmQvZGFydC1ib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXJ0Qm9hcmRQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL2RhcnQtYm9hcmQtcGFuZWwuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGFydFNjb3JlQm9hcmRMaWJyYXJ5Q29tcG9uZW50LFxuICAgIERhcnRCb2FyZFBhbmVsQ29tcG9uZW50LFxuICAgIERhcnRCb2FyZENvbXBvbmVudCxcbiAgICBTY29yZVBhbmVsQ29tcG9uZW50LFxuICAgIFNldHVwUGFuZWxDb21wb25lbnQsXG4gICAgR2FtZVBhbmVsQ29tcG9uZW50LFxuICAgIEV4cG9ydEltcG9ydERhdGFQYW5lbENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQW5ndWxhclN2Z0ljb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtEYXJ0U2NvcmVCb2FyZExpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhcnRTY29yZUJvYXJkTGlicmFyeU1vZHVsZSB7IH1cbiJdfQ==