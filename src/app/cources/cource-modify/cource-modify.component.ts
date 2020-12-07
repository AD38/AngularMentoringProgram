import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cource } from '../models/cource';
import { ICource } from '../models/icource';
import { CourceService } from '../services/cource.service';

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
              private courceService: CourceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params.id;
      if (this.id) {
        this.courceService
          .getById(this.id)
          .subscribe(cource => this.cource = cource);
        this.isNew = false;
      }
      else {
        this.isNew = true;
      }
    });
  }

  public save(): void {
    if (this.isNew) {
      this.courceService
        .add(this.cource)
        .subscribe(o => this.router.navigate(['../']));
    }
    else {
      this.courceService
        .update(this.cource)
        .subscribe(o => this.router.navigate(['../']));;
    }
  }

  public cancel(): void {
    this.router.navigate(['../']);
  }
}
