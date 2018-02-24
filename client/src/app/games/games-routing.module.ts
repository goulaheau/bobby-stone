import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesPageComponent } from './containers/games-page/games-page.component';
import { GamePageComponent } from './containers/game-page/game-page.component';

const routes: Routes = [
  {
    path: '',
    component: GamesPageComponent,
  },
  {
    path: ':id',
    component: GamePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
