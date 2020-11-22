import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceModifyComponent } from './cource-modify.component';

describe('CourceCreateComponent', () => {
  let component: CourceModifyComponent;
  let fixture: ComponentFixture<CourceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
