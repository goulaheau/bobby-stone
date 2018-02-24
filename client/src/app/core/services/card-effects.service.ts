import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CardEffect } from '../../decks/models/card-effect';

@Injectable()
export class CardEffectsService {
  private url = 'http://localhost:8000/card-effects/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CardEffect[]> {
    return this.http.get<CardEffect[]>(`${this.url}`);
  }

  get(id: number): Observable<CardEffect> {
    return this.http.get<CardEffect>(`${this.url}${id}/`);
  }

  post(cardEffect: CardEffect): Observable<CardEffect> {
    return this.http.post<CardEffect>(this.url, cardEffect);
  }

  put(id: number, cardEffect: CardEffect): Observable<CardEffect> {
    return this.http.put<CardEffect>(`${this.url}${id}/`, cardEffect);
  }

  patch(id: number, cardEffect: CardEffect): Observable<CardEffect> {
    return this.http.patch<CardEffect>(`${this.url}${id}/`, cardEffect);
  }

  delete(id: number): Observable<CardEffect> {
    return this.http.delete<CardEffect>(`${this.url}${id}/`);
  }
}
