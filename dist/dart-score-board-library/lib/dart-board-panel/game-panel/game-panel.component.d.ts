import { OnInit } from '@angular/core';
import { ScoreEntry } from '../classes/score-entry';
import { DartGameData } from '../classes/dart-game-data';
import { ScoreService } from '../services/score.service';
export declare class GamePanelComponent implements OnInit {
    private scoreService;
    dartGameData: DartGameData;
    constructor(scoreService: ScoreService);
    ngOnInit(): void;
    scoreEntered(event: ScoreEntry): void;
    scoreReverted(): void;
    startNewGame(): void;
    isPlayerActive(player: string): boolean;
    getPlayerObject(): {
        'name': string;
        'dartCount': number;
    };
    getFirstFinisher(): any;
    private invalidateSet;
    private selectPreviousNotFinishedPlayer;
    private checkIfFinished;
    private selectNextPlayer;
}
