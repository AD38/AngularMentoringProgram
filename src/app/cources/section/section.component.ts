import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICource } from '../models/icource';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {

  @Input() courceItems: ICource[];
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public search() {
    this.onSearch.emit(this.searchText);
  }

  public addCource() {
    console.log('add cource');
  }
}
