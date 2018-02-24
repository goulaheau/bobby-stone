import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksPageComponent } from './containers/decks-page/decks-page.component';
import { DecksRoutingModule } from './decks-routing.module';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckFormPageComponent } from './containers/deck-form-page/deck-form-page.component';
import { DeckFormComponent } from './components/deck-form/deck-form.component';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DecksRoutingModule,
  ],
  declarations: [
    DecksPageComponent,
    DeckListComponent,
    DeckFormPageComponent,
    DeckFormComponent,
    CardListComponent
  ],
})
export class DecksModule {}
