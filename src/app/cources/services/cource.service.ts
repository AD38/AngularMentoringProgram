import { Injectable } from '@angular/core';
import { ICource } from '../models/icource';

@Injectable({
  providedIn: 'root'
})
export class CourceService {
  private courcesItems: ICource[];

  constructor() { 
    this.courcesItems = [
      {
        id: 1,
        title: 'First Item',
        duration: 88,
        creationDate: new Date(2020, 9, 20),
        description: 'Item decription',
        isTopRated: false
      },
      {
        id: 2,
        title: 'Second Item',
        duration: 129,
        creationDate: new Date(2020, 12, 13),
        description: 'Item decription',
        isTopRated: false
      },
      {
        id: 3,
        title: 'Third Item',
        duration: 43,
        creationDate: new Date(2020, 4, 9),
        description: 'Item decription',
        isTopRated: true
      }
    ];
  }

  public get(): ICource[] {
    return this.courcesItems;
  }

  public getById(id: number): ICource {
    let cource = this.courcesItems.find(c => c.id === id);

    return cource ? cource : null;
  }

  public add(cource: ICource): void {
    this.courcesItems.push(cource);
  }

  public update(cource: ICource): void {
    let existingCource = this.getById(cource.id);
    if(!existingCource) {
      throw new Error('invalid Id')
    }

    this.courcesItems[existingCource.id] = cource;
  }

  public delete(id: number): void {
    let existingCource = this.getById(id);
    if(!existingCource) {
      throw new Error('invalid Id')
    }

    let index = this.courcesItems.indexOf(existingCource);
    this.courcesItems.splice(index, 1);
  }
}
