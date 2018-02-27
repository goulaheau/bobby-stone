import { Injectable }         from '@angular/core';
import { HttpClient }         from '@angular/common/http';
import { Observable }         from 'rxjs/Observable';
import { Game }               from '../../games/models/game';
import { CardEffectsService } from './card-effects.service';
import { CardValuesService }  from './card-values.service';
import { CardsService }       from './cards.service';
import { RulesService }       from './rules.service';
import { UsersService }       from './users.service';
import { WebSocketService }   from './web-socket.service';

@Injectable()
export class GamesService {
  private url   = 'http://localhost:8000/games/';
  private wsUrl = 'ws://localhost:8000/games/';

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private cardsService: CardsService,
    private wsService: WebSocketService,
    private cardValuesService: CardValuesService,
    private rulesService: RulesService,
    private cardEffectsService: CardEffectsService) {
  }

  connect(game_id: number, user_id: number): WebSocket {
    return this.wsService.connect(`${this.wsUrl}${game_id}/${user_id}/`);
  }

  getAll(): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.url}`)
      .do((games: Game[]) => {
        this.usersService
          .getAll()
          .subscribe(
            (users: any) => {
              // Create an object with the ids as keys.
              users = users.reduce((map, obj) => {
                map[obj.id] = obj;
                return map;
              }, {});
              games.forEach(
                game => {
                  if (game.owner) {
                    game.owner = users[game.owner];
                  }
                  if (game.opponent) {
                    game.opponent = users[game.opponent];
                  }
                },
              );
            },
          );

        this.rulesService
          .getAll()
          .subscribe(
            (rules: any) => {
              // Create an object with the ids as keys.
              rules = rules.reduce((map, obj) => {
                map[obj.id] = obj;
                return map;
              }, {});
              games.forEach(
                game => {
                  if (game.rule) {
                    game.rule = rules[game.rule];
                  }
                },
              );
            },
          );
      });
  }

  get(id: number): Observable<Game> {
    return this.http
      .get<Game>(`${this.url}${id}/`)
      .do(
        (game: Game) => {
          if (game.owner) {
            this.usersService.get(game.owner).subscribe(
              owner => game.owner = owner,
            );
          }
          if (game.opponent) {
            this.usersService.get(game.opponent).subscribe(
              opponent => game.opponent = opponent,
            );
          }

          this.cardsService.getAll().subscribe(
            (cards: any) => {
              cards = cards.reduce((map, obj) => {
                map[obj.id] = obj;
                return map;
              }, {});

              this.cardEffectsService.getAll().subscribe(
                (cardEffects: any) => {
                  cardEffects = cardEffects.reduce((map, obj) => {
                    map[obj.id] = obj;
                    return map;
                  }, {});

                  this.cardValuesService.getAll().subscribe(
                    (cardValues: any) => {
                      cardValues = cardValues.reduce((map, obj) => {
                        map[obj.id] = obj;
                        return map;
                      }, {});

                      for (const i in game.owner_board_card_values) {
                        game.owner_board_card_values[i]      = cardValues[game.owner_board_card_values[i]];
                        game.owner_board_card_values[i].card = cards[game.owner_board_card_values[i].card];
                        if (typeof game.owner_board_card_values[i].effect === 'number') {
                          game.owner_board_card_values[i].effect = cardEffects[game.owner_board_card_values[i].effect];
                        }
                      }
                      for (const i in game.opponent_board_card_values) {
                        game.opponent_board_card_values[i]      = cardValues[game.opponent_board_card_values[i]];
                        game.opponent_board_card_values[i].card = cards[game.opponent_board_card_values[i].card];
                        if (typeof game.opponent_board_card_values[i].effect === 'number') {
                          game.opponent_board_card_values[i].effect = cardEffects[game.opponent_board_card_values[i].effect];
                        }
                      }
                    },
                  );


                  for (const i in game.owner_deck_cards) {
                    game.owner_deck_cards[i] = cards[game.owner_deck_cards[i]];
                    if (typeof game.owner_deck_cards[i].effect === 'number') {
                      game.owner_deck_cards[i].effect = cardEffects[game.owner_deck_cards[i].effect];
                    }
                  }
                  for (const i in game.opponent_deck_cards) {
                    game.opponent_deck_cards[i] = cards[game.opponent_deck_cards[i]];
                    if (typeof game.opponent_deck_cards[i].effect === 'number') {
                      game.opponent_deck_cards[i].effect = cardEffects[game.opponent_deck_cards[i].effect];
                    }
                  }
                  for (const i in game.owner_hand_cards) {
                    game.owner_hand_cards[i] = cards[game.owner_hand_cards[i]];
                    if (typeof game.owner_hand_cards[i].effect === 'number') {
                      game.owner_hand_cards[i].effect = cardEffects[game.owner_hand_cards[i].effect];
                    }
                  }
                  for (const i in game.opponent_hand_cards) {
                    game.opponent_hand_cards[i] = cards[game.opponent_hand_cards[i]];
                    if (typeof game.opponent_hand_cards[i].effect === 'number') {
                      game.opponent_hand_cards[i].effect = cardEffects[game.opponent_hand_cards[i].effect];
                    }
                  }
                  for (const i in game.owner_graveyard_cards) {
                    game.owner_graveyard_cards[i] = cards[game.owner_graveyard_cards[i]];
                    if (typeof game.owner_graveyard_cards[i].effect === 'number') {
                      game.owner_graveyard_cards[i].effect = cardEffects[game.owner_graveyard_cards[i].effect];
                    }
                  }
                  for (const i in game.opponent_graveyard_cards) {
                    game.opponent_graveyard_cards[i] = cards[game.opponent_graveyard_cards[i]];
                    if (typeof game.opponent_graveyard_cards[i].effect === 'number') {
                      game.opponent_graveyard_cards[i].effect = cardEffects[game.opponent_graveyard_cards[i].effect];
                    }
                  }
                },
              );
            },
          );
        },
      );
  }

  post(game: Game): Observable<Game> {
    this.removeEmptyArrays(game);
    return this.http.post<Game>(this.url, game);
  }

  put(id: number, game: Game): Observable<Game> {
    this.removeEmptyArrays(game);
    return this.http.put<Game>(`${this.url}${id}/`, game);
  }

  patch(id: number, game: Game): Observable<Game> {
    return this.http.patch<Game>(`${this.url}${id}/`, game);
  }

  delete(id: number): Observable<Game> {
    return this.http.delete<Game>(`${this.url}${id}/`);
  }

  removeEmptyArrays(obj): void {
    for (const property of Object.keys(obj)) {
      if (obj[property] instanceof Array && obj[property].length === 0) {
        delete obj[property];
      }
    }
  }
}
