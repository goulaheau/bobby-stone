import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { DragDropModule }           from 'primeng/primeng';
import { GameCreateModalComponent } from './components/game-create-modal/game-create-modal.component';
import { GameJoinModalComponent }   from './components/game-join-modal/game-join-modal.component';
import { GameListComponent }        from './components/game-list/game-list.component';
import { GamePageComponent }        from './containers/game-page/game-page.component';
import { GamesPageComponent }       from './containers/games-page/games-page.component';
import { GamesRoutingModule }       from './games-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GamesRoutingModule,
    DragDropModule
  ],
  declarations: [
    GamesPageComponent,
    GameListComponent,
    GamePageComponent,
    GameCreateModalComponent,
    GameJoinModalComponent,
  ],
})
export class GamesModule {
}
