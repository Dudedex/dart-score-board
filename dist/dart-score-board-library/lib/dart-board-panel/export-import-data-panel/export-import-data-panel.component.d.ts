import { ElementRef, OnInit } from '@angular/core';
import { DartGameData } from '../classes/dart-game-data';
export declare class ExportImportDataPanelComponent implements OnInit {
    importGameButton: ElementRef;
    dartGameData: DartGameData;
    constructor();
    ngOnInit(): void;
    saveGame(): void;
    loadGame(): void;
    fileLoaded(file: any): void;
}
