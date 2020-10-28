import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICource } from '../models/icource';

@Component({
  selector: 'app-cource-item',
  templateUrl: './cource-item.component.html',
  styleUrls: ['./cource-item.component.scss']
})
export class CourceItemComponent implements OnInit {

  @Input() courceItem: ICource;

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public delete(){
    this.onDelete.emit(this.courceItem.id);
  }
  
  public edit(){
    console.log("edit cource item");
  }
}
