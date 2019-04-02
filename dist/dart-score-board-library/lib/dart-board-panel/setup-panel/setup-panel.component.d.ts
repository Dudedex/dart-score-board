import { EventEmitter, OnInit } from '@angular/core';
import { GameSettings } from '../classes/game-setttings';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class SetupPanelComponent implements OnInit {
    gameSettings: GameSettings;
    gameStarted: EventEmitter<{}>;
    isCustomizedRequiredScore: boolean;
    requiredScoreModel: number;
    newPlayerName: string;
    showGameCancelWarning: boolean;
    constructor();
    ngOnInit(): void;
    getGameModes(): any[];
    getGameModeValue(key: number): any;
    getConvertedRequiredScore(): number;
    setRequiredScore(score: number): void;
    setGameMode(mode: number): void;
    doesPlayerExists(): boolean;
    addNewPlayer(): void;
    removePlayer(name: string): void;
    isGameReady(): boolean;
    startGame(): void;
    getGameCancelWarningClass(): "display-warning" | "hide-warning";
    cancelGame(): void;
    drop(event: CdkDragDrop<string[]>): void;
}
