import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  public searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public search() {
    console.log(this.searchText);
  }

  public addCource() {
  }
}
