import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DartGameData } from './classes/dart-game-data';
import { TranslateService } from '@ngx-translate/core';
import { GamePanelComponent } from './game-panel/game-panel.component';
export declare class DartBoardPanelComponent implements OnInit, OnChanges {
    private translate;
    gamePanel: GamePanelComponent;
    locale: string;
    dartGameData: DartGameData;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    startNewGame(): void;
}
