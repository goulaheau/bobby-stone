import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'decks',
    loadChildren: './decks/decks.module#DecksModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    loadChildren: './games/games.module#GamesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'rules',
    loadChildren: './rules/rules.module#RulesModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
