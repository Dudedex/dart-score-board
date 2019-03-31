import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {GameData} from '../classes/game-data';
import {LegData} from '../classes/leg-data';
import {ScoreEntry} from '../classes/score-entry';
import {ScoreService} from '../services/score.service';

@Component({
  selector: 'app-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.css']
})
export class ScorePanelComponent implements OnInit, OnChanges {
  @Input()
  public legData: LegData;

  @Input()
  public playerName: string;

  @Input()
  public requiredScore: number;

  @Input()
  public isActive: boolean;

  @ViewChild('scoreEntryPanel')
  public scoreEntryPanel: ElementRef;

  public displayDetails: boolean = false;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.displayDetails = this.isActive;
    console.log('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isActive) {
      setTimeout(() => {
        this.displayDetails = this.isActive;
        this.scrollToScoreBottom();
      }, 1000);
    }
  }

  public getPendingScores(index: number) {
    return this.scoreService.getPendingScores(index, this.legData.scores, this.requiredScore);
  }

  public getScoreDisplay(score: number) {
    if (score <= 0) {
      return '00';
    }
    if (score < 10) {
      return '0' + score;
    }
    return score;
  }

  public get3DartAverage() {
    const numberOfCompleteSets = Math.floor(this.legData.scores.length / 3);
    if (numberOfCompleteSets <= 0) {
      return '(--)';
    }
    const score = this.getPendingScores(numberOfCompleteSets * 3 - 1);
    return (this.requiredScore - score) / numberOfCompleteSets;
  }

  public getSingleDartAverage() {
    if (this.legData.scores.length === 0) {
      return '(--)';
    }
    const score = this.getPendingScores(this.legData.scores.length - 1);
    return (this.requiredScore - score) / (this.legData.scores.length);
  }

  public triggerDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.scrollToScoreBottom();
  }

  public scrollToScoreBottom() {
    this.scoreEntryPanel.nativeElement.scrollTop = this.scoreEntryPanel.nativeElement.scrollHeight;
  }
}
