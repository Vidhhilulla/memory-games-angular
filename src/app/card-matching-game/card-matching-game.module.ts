import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameComponent } from './card-game/card-game.component';



@NgModule({
  declarations: [
    CardGameComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardGameComponent
  ]
})
export class CardMatchingGameModule { }
