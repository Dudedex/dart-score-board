import { EventEmitter, OnInit } from '@angular/core';
export declare class DartBoardComponent implements OnInit {
    scoreEntered: EventEmitter<{}>;
    scoreReverted: EventEmitter<{}>;
    throwsDone: number;
    constructor();
    ngOnInit(): void;
    score(type: number, field: number): void;
    revertScore(): void;
}
