import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourceBorderHighlight]'
})
export class CourceBorderHighlightDirective implements OnInit {

  @Input('appCourceBorderHighlight') public creationDate: Date;
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    let currentDate: Date = new Date();
    let tillDate: Date = new Date();
    tillDate.setDate(currentDate.getDate() - 14);

    if(this.creationDate < currentDate && this.creationDate >= tillDate) {
      this.element.nativeElement.style.border = "1px solid #4caf50";
    }
    else if(this.creationDate > currentDate) {
      this.element.nativeElement.style.border = "1px solid #0277bd";
    }
  }

}
