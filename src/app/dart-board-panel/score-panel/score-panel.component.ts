import {Component, Input, OnInit} from '@angular/core';
import {GameData} from '../classes/game-data';
import {LegData} from '../classes/leg-data';
import {ScoreEntry} from '../classes/score-entry';

@Component({
  selector: 'app-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.css']
})
export class ScorePanelComponent implements OnInit {

  @Input()
  public legData: LegData;

  @Input()
  public playerName: string;

  @Input()
  public requiredScore: number;

  constructor() { }

  ngOnInit() {
  }

  public getPendingScores(index: number) {
      let total = this.requiredScore;
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
}
