import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Card} from '../../decks/models/card';
import {CardEffectsService} from './card-effects.service';

@Injectable()
export class CardsService {
  private url = 'http://localhost:8000/cards/';

  constructor(private http: HttpClient,
              private cardEffectsService: CardEffectsService) {
  }

  getAll(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${this.url}`)
      .do(cards => {
        this.cardEffectsService
          .getAll()
          .subscribe((cardEffects: any) => {
            cardEffects = cardEffects.reduce((map, obj) => {
              map[obj.id] = obj;
              return map;
            }, {});

            cards.forEach(card => {
              if (typeof card.effect === 'number') {
                card.effect = cardEffects[card.effect];
              }
            });
          });
      });
  }

  get(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.url}${id}/`);
  }

  post(card: Card): Observable<Card> {
    return this.http.post<Card>(this.url, card);
  }

  put(id: number, card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.url}${id}/`, card);
  }

  patch(id: number, card: Card): Observable<Card> {
    return this.http.patch<Card>(`${this.url}${id}/`, card);
  }

  delete(id: number): Observable<Card> {
    return this.http.delete<Card>(`${this.url}${id}/`);
  }
}
