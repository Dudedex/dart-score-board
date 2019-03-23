import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {GameSettings} from '../classes/game-setttings';

@Component({
  selector: 'app-setup-panel',
  templateUrl: './setup-panel.component.html',
  styleUrls: ['./setup-panel.component.css']
})
export class SetupPanelComponent implements OnInit {

  @Input()
  public gameSettings: GameSettings;

  constructor() { }

  ngOnInit() {
  }

}
