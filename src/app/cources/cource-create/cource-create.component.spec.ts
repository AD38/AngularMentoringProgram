import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceCreateComponent } from './cource-create.component';

describe('CourceCreateComponent', () => {
  let component: CourceCreateComponent;
  let fixture: ComponentFixture<CourceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
