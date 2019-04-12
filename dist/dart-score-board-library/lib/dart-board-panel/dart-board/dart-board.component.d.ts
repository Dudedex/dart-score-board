import { EventEmitter, OnInit } from '@angular/core';
export declare class DartBoardComponent implements OnInit {
    scoreEntered: EventEmitter<{}>;
    scoreReverted: EventEmitter<{}>;
    throwsDone: number;
    clickedId: any;
    constructor();
    ngOnInit(): void;
    score(type: number, field: number, event: MouseEvent): void;
    revertScore(): void;
    getFillColor(elementId: string, defaultColor: string): string;
}
