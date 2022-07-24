import { NgModule } from '@angular/core';
import { PongComponent } from './pong.component';
import { GameComponent } from './game/game.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    PongComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PongComponent
  ]
})
export class PongModule { }
