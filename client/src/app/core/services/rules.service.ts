import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Rule } from '../../games/models/rule';

@Injectable()
export class RulesService {
  private url = 'http://localhost:8000/rules/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Rule[]> {
    return this.http.get<Rule[]>(`${this.url}`);
  }

  get(id: number): Observable<Rule> {
    return this.http.get<Rule>(`${this.url}${id}/`);
  }

  post(rule: Rule): Observable<Rule> {
    return this.http.post<Rule>(this.url, rule);
  }

  put(id: number, rule: Rule): Observable<Rule> {
    return this.http.put<Rule>(`${this.url}${id}/`, rule);
  }

  patch(id: number, rule: Rule): Observable<Rule> {
    return this.http.patch<Rule>(`${this.url}${id}/`, rule);
  }

  delete(id: number): Observable<Rule> {
    return this.http.delete<Rule>(`${this.url}${id}/`);
  }
}
