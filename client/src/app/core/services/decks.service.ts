import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Deck} from '../../decks/models/deck';
import {CardsService} from './cards.service';
import {of} from 'rxjs/observable/of';
import {CardEffectsService} from './card-effects.service';

@Injectable()
export class DecksService {
  private url = 'http://localhost:8000/decks/';

  constructor(private http: HttpClient,
              private cardsService: CardsService,
              private cardEffectsService: CardEffectsService) {
  }

  getAll(params: HttpParams = null): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${this.url}`, {params});
  }

  get(id: number): Observable<Deck> {
    return this.http
      .get<Deck>(`${this.url}${id}/`)
      .do(
        deck => {
          this.cardsService
            .getAll().subscribe(
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

                  for (const i in deck.cards) {
                    deck.cards[i] = cards[deck.cards[i]];
                    if (typeof deck.cards[i].effect === 'number') {
                      deck.cards[i].effect = cardEffects[deck.cards[i].effect];
                    }
                  }
                }
              );
            }
          );
        },
      );
  }

  post(deck: Deck): Observable<Deck> {
    return this.http.post<Deck>(this.url, deck);
  }

  put(id: number, deck: Deck): Observable<Deck> {
    return this.http.put<Deck>(`${this.url}${id}/`, deck);
  }

  patch(id: number, deck: Deck): Observable<Deck> {
    return this.http.patch<Deck>(`${this.url}${id}/`, deck);
  }

  delete(id: number): Observable<Deck> {
    return this.http.delete<Deck>(`${this.url}${id}/`);
  }
}
