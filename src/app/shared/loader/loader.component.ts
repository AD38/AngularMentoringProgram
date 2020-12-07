import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public isLoading: Subject<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
  }

  ngOnInit(): void {
  }

}
