import { Component, Input, OnInit } from '@angular/core';
import { ICource } from '../models/icource';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss']
})
export class CourceListComponent implements OnInit {
  @Input() public courceItems: ICource[];
  public filteredItems: ICource[];

  constructor() { }

  ngOnInit(): void {
    this.courceItems = [
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
    this.filteredItems = [...this.courceItems];
  }

  public onCourceDelete(id: number) {
    console.log(id);
  }

  public loadMore() {
    console.log('load more');
  }

  public onSearch(filteredItems: ICource[]) {
    this.filteredItems = filteredItems;
  }
}
