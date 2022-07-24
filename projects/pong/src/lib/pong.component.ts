import { Component, OnInit, ViewChild } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'satheshsat-pong',
  template: `
    <h1>
      PONG
    </h1>
    <lib-game> </lib-game>
    <button (click)="gameComponent.newGame()">New Game</button>
    <button (click)="gameComponent.resetAll()">Reset All</button>
  `,
  styleUrls: ["./pong.component.css"]
})
export class PongComponent implements OnInit {

  @ViewChild(GameComponent) gameComponent: GameComponent | any;

  constructor() { }

  ngOnInit(): void {
  }

}
