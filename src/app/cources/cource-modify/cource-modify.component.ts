import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cource } from '../models/cource';
import { ICource } from '../models/icource';
import { CourceService } from '../services/cource.service';
import * as CourceActions from '../store/cources.actions';

@Component({
  selector: 'app-cource-modify',
  templateUrl: './cource-modify.component.html',
  styleUrls: ['./cource-modify.component.scss']
})
export class CourceModifyComponent implements OnInit {
  public cource: ICource = new Cource();
  public isNew: boolean;

  private id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store,
              private courceService: CourceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params.id;
      if (this.id) {
        this.isNew = false;
        this.courceService
          .getById(this.id)
          .subscribe(cource => this.cource = cource);
      }
      else {
        this.isNew = true;
      }
    });
  }

  public save(): void {
    if (this.isNew) {
      this.store.dispatch(CourceActions.addCource({ cource: this.cource }));
    }
    else {
      this.store.dispatch(CourceActions.updateCource({ cource: this.cource }));
    }
  }

  public cancel(): void {
    this.router.navigate(['../']);
  }
}
