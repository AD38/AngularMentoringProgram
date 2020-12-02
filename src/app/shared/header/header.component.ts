import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { IUser } from 'src/app/core/models/iuser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthentificated: boolean;
  public userInfo: Observable<IUser>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthentificated = this.authService.isAuthentificated;
    this.userInfo = this.authService.getUserInfo();
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
