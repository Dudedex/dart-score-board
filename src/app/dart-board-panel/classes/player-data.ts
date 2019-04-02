import {LegData} from './leg-data';

export class PlayerData {
  public currentLeg: LegData;

  constructor() {
    this.currentLeg = new LegData();
  }
}
