import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMatchingGameModule } from './card-matching-game/card-matching-game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardMatchingGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
