import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecksPageComponent } from './containers/decks-page/decks-page.component';
import { DeckFormPageComponent } from './containers/deck-form-page/deck-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: DecksPageComponent,
  },
  {
    path: 'form',
    component: DeckFormPageComponent,
  },
  {
    path: 'form/:id',
    component: DeckFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecksRoutingModule {}
