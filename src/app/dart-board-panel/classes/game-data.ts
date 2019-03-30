import {LegData} from './leg-data';

export class GameData {
  public currentLeg: LegData;

  constructor() {
    this.currentLeg = new LegData();
  }
}
