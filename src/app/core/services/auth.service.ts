import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email: string, password: string): void {
    let fakeToken = "wY05SFGzvWP6az1P";
    localStorage.setItem('userInfo', JSON.stringify({ token: fakeToken, email: email }));
  }

  public logout(): void {
    localStorage.removeItem('userInfo');
  }

  public getUserInfo() {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo.email;
  }

  public get isAuthentificated(): boolean {
    return JSON.parse(localStorage.getItem('userInfo'));
  } 

}
