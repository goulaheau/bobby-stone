import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastyService } from 'ng2-toasty';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private toastyService: ToastyService) { }

  /**
   *
   *
   * @param {Authenticate} { username, password }
   * @returns {Observable<User>}
   * @memberof AuthService
   */
  login({ username, password }: Authenticate): Observable<User> {
    return this.http
      .post<{ data: User }>('http://localhost:8000/auth/', {
        username,
        password,
      }, { observe: 'response' })
      .map((res: any) => {
        this.setTokenInLocalStorage(res);
        return res.body.user;
      })
      .do(
        _ => _,
        (err) => this.toastyService.error({
          title: 'ERROR!!',
          msg: err.error.errors[0],
        }),
      );
  }

  /**
   *
   *
   * @param {Authenticate} { name, username, password }
   * @returns {Observable<User>}
   * @memberof AuthService
   */
  register({ name, username, password }: Authenticate): Observable<User> {
    return this.http
      .post<{ data: User }>('auth', {
        name,
        email: username,
        password,
      }, { observe: 'response' })
      .map(res => {
        const user = res.body.data;
        this.setTokenInLocalStorage(res);
        return user;
      })
      .do(
        _ => _,
        (err) => this.toastyService.error({
          title: 'ERROR!!',
          msg: err.error.errors.full_messages.join('<br>'),
        }),
      );
  }

  /**
   *sho
   *
   * @returns {Observable<boolean>}
   * @memberof AuthService
   */
  authorized(): Observable<boolean> {
    // return this.http
    //   .get<{ status: boolean }>('http://localhost:8000/check_authenticated/')
    //   .retry(2)
    //   .map(body => body.status);
    if (JSON.parse(localStorage.getItem('token'))) {
      return of(true);
    }
    return of(false);
  }

  /**
   *
   *
   * @returns {Observable<User>}
   * @memberof AuthService
   */
  current_user(): Observable<User> {
    return of(JSON.parse(localStorage.getItem('user')));
  }

  /**
   *
   *
   * @returns
   *
   * @memberof AuthService
   */
  logout() {
    localStorage.clear();
    return of(true);
  }

  /**
   *
   *
   * @returns {{}}
   * @memberof AuthService
   */
  getTokenHeader(): HttpHeaders {
    const token = JSON.parse(localStorage.getItem('token'));

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Token ${token}` : ''
    });
  }

  private setTokenInLocalStorage(res): void {
    localStorage.setItem('user', JSON.stringify(res.body.user));
    localStorage.setItem('token', JSON.stringify(res.body.token));
  }
}
