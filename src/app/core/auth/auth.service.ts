import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IToken } from '../models/itoken';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<IToken> {
    const login = {
      login: email,
      password
    };

    return this.http.post<IToken>('http://localhost:3004/auth/login', login)
      .pipe(map(token => {
        localStorage.setItem('token', token.token);

        return { token: token.token };
      }));
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3004/auth/userinfo', {});
  }

  public get isAuthentificated(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
