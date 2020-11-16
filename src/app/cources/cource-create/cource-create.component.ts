import { Component, OnInit } from '@angular/core';
import { Cource } from '../models/cource';
import { ICource } from '../models/icource';

@Component({
  selector: 'app-cource-create',
  templateUrl: './cource-create.component.html',
  styleUrls: ['./cource-create.component.scss']
})
export class CourceCreateComponent implements OnInit {

  public newCource: ICource;

  constructor() { }

  ngOnInit(): void {
    this.newCource = new Cource();
  }

  public save() { }

  public cancel() { }
}
