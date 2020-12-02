import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ICource } from '../models/icource';
import { ICourceBE } from '../models/icourcebe';

@Injectable({
  providedIn: 'root'
})
export class CourceService {
  private readonly url = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) { }

  public get(count: number = 3, textFragment: string = ''): Observable<ICource[]> {
    return this.http.get<ICourceBE[]>(this.url,
        { params: new HttpParams().set('count', count.toString()).set('textFragment', textFragment) })
      .pipe(map(cources => {
        return cources.map(cource => {
          return {
            id: cource.id,
            title: cource.name,
            creationDate: new Date(cource.date),
            duration: cource.length,
            description: cource.description,
            isTopRated: cource.isTopRated,
          };
        });
      }));
  }

  public getById(id: number): Observable<ICource> {
    return this.http.get<ICourceBE[]>(this.url, { params: new HttpParams().set('id', id.toString()) })
      .pipe(map(cource => {
        return {
          id: cource[0].id,
          title: cource[0].name,
          creationDate: new Date(cource[0].date),
          duration: cource[0].length,
          description: cource[0].description,
          isTopRated: cource[0].isTopRated,
        };
      }));
  }

  public add(cource: ICource): void {
    const courceBE: ICourceBE = {
      id: cource.id,
      date: cource.creationDate.toString(),
      description: cource.description,
      isTopRated: cource.isTopRated,
      length: cource.duration,
      name: cource.title
    };

    this.http.post(this.url, courceBE).subscribe();
  }

  public update(cource: ICource): void {
    const courceBE: ICourceBE = {
      id: cource.id,
      date: cource.creationDate.toString(),
      description: cource.description,
      isTopRated: cource.isTopRated,
      length: cource.duration,
      name: cource.title
    };

    this.http.patch(this.url + '/' + cource.id, courceBE).subscribe();
  }

  public delete(id: number): void {
    this.http.delete(this.url + '/' + id).subscribe();
  }
}
