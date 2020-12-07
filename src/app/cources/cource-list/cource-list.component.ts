import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourceService } from '../services/cource.service';
import { ICource } from '../models/icource';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, skipWhile, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
})
export class CourceListComponent implements OnInit {
  public courceItems$: Observable<ICource[]>;

  private searchText$: Subject<string> = new Subject<string>();
  private courceItemsLength = 3;

  constructor(private courceService: CourceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courceItems$ = this.courceService.get(this.courceItemsLength);
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(text => text.length === 0 || text.length > 3),
        switchMap(text => this.courceService.get(3, text))
      )
      .subscribe(items => this.courceItems$ = of(items));
  }

  public onCourceDelete(id: number): void {
    if (window.confirm('Do you really want to delete this cource?')) {
      this.courceService.delete(id)
        .subscribe(o => this.courceItems$ = this.courceService.get(this.courceItemsLength - 1));
    }
  }

  public onCourceEdit(id: number): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  public loadMore(): void {
    this.courceItemsLength = this.courceItemsLength + 3;
    this.courceItems$ = this.courceService.get(this.courceItemsLength).pipe();
  }

  public onSearch(searchText: string): void {
    this.searchText$.next(searchText);
  }
}
