import { NgModule } from '@angular/core';
import { PuzzleComponent } from './puzzle.component';
import { ImagePuzzleComponent } from './image-puzzle/image-puzzle.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PuzzleComponent,
    ImagePuzzleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    PuzzleComponent
  ]
})
export class PuzzleModule { }
