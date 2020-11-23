import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CourceService } from 'src/app/cources/services/cource.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public courceName: string;
  public isModifyCourcePage: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private courceService: CourceService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const courceId = +this.route.snapshot.firstChild.params.id as number;
      if (courceId) {
        this.isModifyCourcePage = true;
        this.courceName = this.courceService.getById(courceId).title;
      }
      else {
        this.isModifyCourcePage = false;
      }
    });
  }
}
