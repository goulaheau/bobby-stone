import { CommonModule }                             from '@angular/common';
// Import HttpClientModule from @angular/common/http
import { HTTP_INTERCEPTORS, HttpClientModule }      from '@angular/common/http';
import { NgModule }                                 from '@angular/core';
import { NgProgressInterceptor, NgProgressModule, } from 'ngx-progressbar';
import { TokenInterceptor }                         from '../auth/interceptors/token.interceptor';
import { SharedModule }                             from './../shared/shared.module';
import { HeaderComponent }                          from './components/header/header.component';

import { AppComponent }       from './containers/app/app.component';
import { CardEffectsService } from './services/card-effects.service';
import { CardValuesService }  from './services/card-values.service';
import { CardsService }       from './services/cards.service';
import { DecksService }       from './services/decks.service';
import { GamesService }       from './services/games.service';
import { RulesService }       from './services/rules.service';
import { UsersService }       from './services/users.service';
import { WebSocketService }   from './services/web-socket.service';

export const COMPONENTS = [
  AppComponent,
  HeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    WebSocketService,
  ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NgProgressInterceptor,
          multi: true,
        },
        DecksService,
        CardsService,
        UsersService,
        GamesService,
        CardEffectsService,
        CardValuesService,
        RulesService,
      ],
    };
  }
}
