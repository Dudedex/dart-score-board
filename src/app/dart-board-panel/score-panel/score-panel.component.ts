import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameData} from '../classes/game-data';
import {LegData} from '../classes/leg-data';
import {ScoreEntry} from '../classes/score-entry';

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

  public displayDetails: boolean = false;

  constructor() {
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
    let total = this.requiredScore;
    if (index > this.legData.scores.length - 1) {
      index = this.legData.scores.length - 1;
    }
    for (let i = 0; i <= index; i++) {
      total = total - this.legData.scores[i].total;
    }
    return total;
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
    /**
     * TODO
     * setTimeout( () => {
      const element = document.getElementById('score-bottom-' + this.playerName);
      element.scrollTo(d);
    }, 1000);
     +https://stackoverflow.com/questions/28969592/scroll-to-element-inside-scrollable-div
     */

  }
}
