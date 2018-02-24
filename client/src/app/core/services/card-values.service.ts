import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CardValue }  from '../../games/models/card-value';

@Injectable()
export class CardValuesService {
  private url = 'http://localhost:8000/card-values/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CardValue[]> {
    return this.http.get<CardValue[]>(`${this.url}`);
  }

  get(id: number): Observable<CardValue> {
    return this.http.get<CardValue>(`${this.url}${id}/`);
  }

  post(cardValues: CardValue): Observable<CardValue> {
    return this.http.post<CardValue>(this.url, cardValues);
  }

  put(id: number, cardValues: CardValue): Observable<CardValue> {
    return this.http.put<CardValue>(`${this.url}${id}/`, cardValues);
  }

  patch(id: number, cardValues: CardValue): Observable<CardValue> {
    return this.http.patch<CardValue>(`${this.url}${id}/`, cardValues);
  }

  delete(id: number): Observable<CardValue> {
    return this.http.delete<CardValue>(`${this.url}${id}/`);
  }
}
