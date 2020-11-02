import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICource } from '../models/icource';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  providers: [ FilterPipe ]
})
export class SectionComponent implements OnInit {

  @Input() courceItems: ICource[];
  @Output() onSearch: EventEmitter<ICource[]> = new EventEmitter<ICource[]>();

  public searchText: string = '';

  constructor(private filterPipe: FilterPipe) { }

  ngOnInit(): void {
  }

  public search() {
    this.onSearch.emit(this.filterPipe.transform(this.courceItems, this.searchText));
  }

  public addCource() {
    console.log('add cource');
  }
}
