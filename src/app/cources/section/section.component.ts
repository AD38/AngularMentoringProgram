import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public search() {
    this.onSearch.emit(this.searchText);
  }

  public addCource() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
