import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CourceItemComponent } from '../cource-item/cource-item.component';
import { CourceBorderHighlightDirective } from '../directives/cource-border-highlight.directive';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { SectionComponent } from '../section/section.component';

import { CourceListComponent } from './cource-list.component';

describe('CourceListComponent', () => {
  let component: CourceListComponent;
  let fixture: ComponentFixture<CourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceListComponent, CourceItemComponent, SectionComponent, FilterPipe, OrderByPipe, CourceBorderHighlightDirective ],
      imports: [ FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if mock items are created', () => {
    fixture.detectChanges();
    expect(component.courceItems.length).toBe(3);
  });

  it('should call console.log on delete', () => {
    spyOn(console, 'log');
    component.onCourceDelete(11);

    expect(console.log).toHaveBeenCalledWith(11);
  });

  it('should call console.log on load more', () => {
    spyOn(console, 'log');
    component.loadMore();

    expect(console.log).toHaveBeenCalledWith('load more');
  });
});
