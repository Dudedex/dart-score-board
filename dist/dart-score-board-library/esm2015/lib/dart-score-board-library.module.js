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
import { ScoreService } from './dart-board-panel/services/score.service';
export class DartScoreBoardLibraryModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DartScoreBoardLibraryModule,
            providers: [ScoreService]
        };
    }
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
                providers: [ScoreService],
                exports: [DartScoreBoardLibraryComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLGdGQUFnRixDQUFDO0FBQzlILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQXdCdkUsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUMxQixDQUFDO0lBQ0osQ0FBQzs7O1lBNUJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osOEJBQThCO29CQUM5Qix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsOEJBQThCO2lCQUMvQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixXQUFXO29CQUNYLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsZUFBZSxDQUFDLE9BQU8sRUFBRTtpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN6QixPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFydFNjb3JlQm9hcmRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0FuZ3VsYXJTdmdJY29uTW9kdWxlfSBmcm9tICdhbmd1bGFyLXN2Zy1pY29uJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7RXhwb3J0SW1wb3J0RGF0YVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvZXhwb3J0LWltcG9ydC1kYXRhLXBhbmVsL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtHYW1lUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9nYW1lLXBhbmVsL2dhbWUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7U2V0dXBQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL3NldHVwLXBhbmVsL3NldHVwLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Njb3JlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9zY29yZS1wYW5lbC9zY29yZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXJ0Qm9hcmRDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkL2RhcnQtYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7RGFydEJvYXJkUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9kYXJ0LWJvYXJkLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Njb3JlU2VydmljZX0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL3NlcnZpY2VzL3Njb3JlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXJ0U2NvcmVCb2FyZExpYnJhcnlDb21wb25lbnQsXG4gICAgRGFydEJvYXJkUGFuZWxDb21wb25lbnQsXG4gICAgRGFydEJvYXJkQ29tcG9uZW50LFxuICAgIFNjb3JlUGFuZWxDb21wb25lbnQsXG4gICAgU2V0dXBQYW5lbENvbXBvbmVudCxcbiAgICBHYW1lUGFuZWxDb21wb25lbnQsXG4gICAgRXhwb3J0SW1wb3J0RGF0YVBhbmVsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBBbmd1bGFyU3ZnSWNvbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcbiAgXSxcbiAgcHJvdmlkZXJzOiBbU2NvcmVTZXJ2aWNlXSxcbiAgZXhwb3J0czogW0RhcnRTY29yZUJvYXJkTGlicmFyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRGFydFNjb3JlQm9hcmRMaWJyYXJ5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYXJ0U2NvcmVCb2FyZExpYnJhcnlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtTY29yZVNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19