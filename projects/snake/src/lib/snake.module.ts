import { NgModule } from '@angular/core';
import { SnakeComponent } from './snake.component';
import { BestScoreManager } from './snake.storage.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SnakeComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SnakeComponent
  ],
  providers: [BestScoreManager],
})
export class SnakeModule { }
