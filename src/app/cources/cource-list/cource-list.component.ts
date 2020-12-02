import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourceService } from '../services/cource.service';
import { ICource } from '../models/icource';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
})
export class CourceListComponent implements OnInit {
  public courceItems: ICource[] = [];

  private searchText: string;

  constructor(private courceService: CourceService,
              private router: Router,
              private route: ActivatedRoute,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.courceService.get().subscribe((cources: ICource[]) => {
      this.courceItems = cources;
      this.cdRef.markForCheck();
    });
  }

  public onCourceDelete(id: number): void {
    if (window.confirm('Do you really want to delete this cource?')) {
      this.courceService.delete(id);
      this.courceService.get(this.courceItems.length - 1, this.searchText).subscribe((cources: ICource[]) => {
        this.courceItems = cources;
        this.cdRef.markForCheck();
      });
    }
  }

  public onCourceEdit(id: number): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  public loadMore(): void {
    this.courceService.get(this.courceItems.length + 3, this.searchText).subscribe((cources: ICource[]) => {
      this.courceItems = cources;
      this.cdRef.markForCheck();
    });
  }

  public onSearch(searchText: string): void {
    this.searchText = searchText;
    this.courceService.get(3, searchText).subscribe((cources: ICource[]) => {
      this.courceItems = cources;
      this.cdRef.markForCheck();
    });
  }
}
