import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { IUser } from 'src/app/core/models/iuser';
import { selectUserInfo } from 'src/app/core/store/auth.selectors';
import * as AuthActions from '../../core/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthentificated: boolean;
  public userInfo$: Observable<IUser> = this.store.pipe(select(selectUserInfo));

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.isAuthentificated = this.authService.isAuthentificated;
    this.store.dispatch(AuthActions.loadUserInfo());
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
