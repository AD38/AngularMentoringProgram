import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcePageComponent } from './cource-page.component';

describe('CourcePageComponent', () => {
  let component: CourcePageComponent;
  let fixture: ComponentFixture<CourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourcePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
