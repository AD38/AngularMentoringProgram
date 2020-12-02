import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.authService.isAuthentificated) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      body: {...request.body as {}, token: localStorage.getItem('token') },
      headers: request.headers.set('Authorization', localStorage.getItem('token'))
    });

    return next.handle(authRequest);
  }
}
