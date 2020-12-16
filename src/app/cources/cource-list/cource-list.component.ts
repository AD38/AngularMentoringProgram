import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourceService } from '../services/cource.service';
import { ICource } from '../models/icource';
import { Observable, of, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as CourceActions from '../store/cources.actions';
import { selectCources } from '../store/cources.selectors';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceListComponent implements OnInit {
  public courceItems$: Observable<ICource[]> = this.store.pipe(select(selectCources));

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(CourceActions.loadCources());
  }

  public onCourceDelete(id: number): void {
    if (window.confirm('Do you really want to delete this cource?')) {
      this.store.dispatch(CourceActions.deleteCource({ id }));
    }
  }

  public onCourceEdit(id: number): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  public loadMore(): void {
    this.store.dispatch(CourceActions.loadMoreCources());
  }

  public onSearch(searchText: string): void {
    this.store.dispatch(CourceActions.searchCources({ searchText }));
  }
}
