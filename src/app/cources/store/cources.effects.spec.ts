import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CourcesEffects } from './cources.effects';

describe('CourcesEffects', () => {
  let actions$: Observable<any>;
  let effects: CourcesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourcesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CourcesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
