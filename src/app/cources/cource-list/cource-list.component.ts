import { Component, Input, OnInit } from '@angular/core';
import { ICource } from '../models/icource';
import { FilterPipe } from '../pipes/filter.pipe';
import { CourceService } from '../services/cource.service';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe]
})
export class CourceListComponent implements OnInit {
  public courceItems: ICource[];

  private searchText: string;

  constructor(private courceService: CourceService, private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    this.courceItems = this.courceService.get();
  }

  public onCourceDelete(id: number): void {
    if(window.confirm('Do ypu really want to delete this cource?')){
      this.courceService.delete(id);
      this.courceItems = this.courceService.get();
      this.courceItems = this.filterPipe.transform(this.courceItems, this.searchText);
    } 
  }

  public onCourceEdit(id: number): void {

  }

  public loadMore(): void {
    console.log('load more');
  }

  public onSearch(searchText: string): void {
    this.searchText = searchText;
    this.courceItems = this.courceService.get();
    this.courceItems = this.filterPipe.transform(this.courceItems, searchText);
  }
}
