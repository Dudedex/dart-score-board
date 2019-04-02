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
var DartScoreBoardLibraryModule = /** @class */ (function () {
    function DartScoreBoardLibraryModule() {
    }
    /**
     * @return {?}
     */
    DartScoreBoardLibraryModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DartScoreBoardLibraryModule,
            providers: [ScoreService]
        };
    };
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
    return DartScoreBoardLibraryModule;
}());
export { DartScoreBoardLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RhcnQtc2NvcmUtYm9hcmQtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9kYXJ0LXNjb3JlLWJvYXJkLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLGdGQUFnRixDQUFDO0FBQzlILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNEQUFzRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUV2RTtJQUFBO0lBNkJBLENBQUM7Ozs7SUFOUSxtQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O2dCQTVCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDhCQUE4Qjt3QkFDOUIsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLDhCQUE4QjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDekIsT0FBTyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzFDOztJQVFELGtDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0FQWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhcnRTY29yZUJvYXJkTGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vZGFydC1zY29yZS1ib2FyZC1saWJyYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtBbmd1bGFyU3ZnSWNvbk1vZHVsZX0gZnJvbSAnYW5ndWxhci1zdmctaWNvbic7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge0V4cG9ydEltcG9ydERhdGFQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9kYXJ0LWJvYXJkLXBhbmVsL2V4cG9ydC1pbXBvcnQtZGF0YS1wYW5lbC9leHBvcnQtaW1wb3J0LWRhdGEtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7R2FtZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1NldHVwUGFuZWxDb21wb25lbnR9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9zZXR1cC1wYW5lbC9zZXR1cC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTY29yZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvc2NvcmUtcGFuZWwvc2NvcmUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7RGFydEJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvZGFydC1ib2FyZC9kYXJ0LWJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhcnRCb2FyZFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2RhcnQtYm9hcmQtcGFuZWwvZGFydC1ib2FyZC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTY29yZVNlcnZpY2V9IGZyb20gJy4vZGFydC1ib2FyZC1wYW5lbC9zZXJ2aWNlcy9zY29yZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGFydFNjb3JlQm9hcmRMaWJyYXJ5Q29tcG9uZW50LFxuICAgIERhcnRCb2FyZFBhbmVsQ29tcG9uZW50LFxuICAgIERhcnRCb2FyZENvbXBvbmVudCxcbiAgICBTY29yZVBhbmVsQ29tcG9uZW50LFxuICAgIFNldHVwUGFuZWxDb21wb25lbnQsXG4gICAgR2FtZVBhbmVsQ29tcG9uZW50LFxuICAgIEV4cG9ydEltcG9ydERhdGFQYW5lbENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQW5ndWxhclN2Z0ljb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIHByb3ZpZGVyczogW1Njb3JlU2VydmljZV0sXG4gIGV4cG9ydHM6IFtEYXJ0U2NvcmVCb2FyZExpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhcnRTY29yZUJvYXJkTGlicmFyeU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFydFNjb3JlQm9hcmRMaWJyYXJ5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbU2NvcmVTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==