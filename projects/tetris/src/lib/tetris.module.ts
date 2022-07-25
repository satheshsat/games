import { NgModule } from '@angular/core';
import { TetrisComponent } from './tetris.component';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    TetrisComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TetrisComponent
  ],
  providers: [GameService]
})
export class TetrisModule { }
