import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
        return cources.map(cource => this.mapCourceBEToCource(cource));
      }));
  }

  public getById(id: number): Observable<ICource> {
    return this.http.get<ICourceBE[]>(this.url, { params: new HttpParams().set('id', id.toString()) })
      .pipe(map(cource => this.mapCourceBEToCource(cource[0])));
  }

  public add(cource: ICource): Observable<any> {
    const courceBE: ICourceBE = this.mapCourceToCourceBE(cource);

    return this.http.post(this.url, courceBE);
  }

  public update(cource: ICource): Observable<ICource> {
    const courceBE: ICourceBE = this.mapCourceToCourceBE(cource);

    return this.http.patch<ICourceBE>(this.url + '/' + cource.id, courceBE)
      .pipe(map(cource => this.mapCourceBEToCource(cource)));
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  private mapCourceToCourceBE(cource: ICource): ICourceBE {
    return {
      id: cource.id,
      date: cource.creationDate.toString(),
      description: cource.description,
      isTopRated: cource.isTopRated,
      length: cource.duration,
      name: cource.title
    };
  }

  private mapCourceBEToCource(cource: ICourceBE): ICource {
    return {
      id: cource.id,
      title: cource.name,
      creationDate: new Date(cource.date),
      duration: cource.length,
      description: cource.description,
      isTopRated: cource.isTopRated,
    };
  }
}
