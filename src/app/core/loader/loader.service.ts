import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public get isLoading(): Subject<boolean> {
    return this.isLoading$;
  }

  public show(): void {
    this.isLoading$.next(true);
  }

  public hide(): void {
    this.isLoading$.next(false);
  }
}
