import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/iaouthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private readonly url = 'http://localhost:3004/authors';

  constructor(private http: HttpClient) { }

  public get(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.url);
  }
}
