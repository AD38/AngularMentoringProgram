import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public login() {
    this.authService.login(this.email, this.password);
  }
}
