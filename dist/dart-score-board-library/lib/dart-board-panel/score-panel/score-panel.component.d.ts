import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LegData } from '../classes/leg-data';
import { ScoreService } from '../services/score.service';
export declare class ScorePanelComponent implements OnInit, OnChanges {
    private scoreService;
    legData: LegData;
    playerName: string;
    requiredScore: number;
    isActive: boolean;
    scoreEntryPanel: ElementRef;
    displayDetails: boolean;
    constructor(scoreService: ScoreService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getPendingScores(index: number): number;
    getScoreDisplay(score: number): string | number;
    get3DartAverage(): number | "(--)";
    getSingleDartAverage(): number | "(--)";
    triggerDisplayDetails(): void;
    scrollToScoreBottom(): void;
}
