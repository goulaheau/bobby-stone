import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../auth/models/user';
import { WebSocketService } from './web-socket.service';


@Injectable()
export class UsersService {
  private url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}/`);
  }

  post(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  put(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${id}/`, user);
  }

  patch(id: number, user: User): Observable<User> {
    return this.http.patch<User>(`${this.url}${id}/`, user);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}${id}/`);
  }
}
