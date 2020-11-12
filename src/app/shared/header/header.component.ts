import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthentificated: boolean;
  public email: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthentificated = this.authService.isAuthentificated;
    if(this.isAuthentificated) {
      this.email = this.authService.getUserInfo();
    } 
  }

  public logout() {
    console.log('logout: ' + this.authService.getUserInfo());
    this.authService.logout();
  }
}
