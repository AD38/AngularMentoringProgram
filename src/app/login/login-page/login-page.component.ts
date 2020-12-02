import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input() email: string;
  @Input() password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.email, this.password)
      .subscribe({ next: data => this.router.navigate(['cources']) });
  }
}
