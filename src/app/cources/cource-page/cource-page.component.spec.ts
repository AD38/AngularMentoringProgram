import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/app/core/core.module';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { CourceItemComponent } from '../cource-item/cource-item.component';
import { CourceListComponent } from '../cource-list/cource-list.component';
import { CourceBorderHighlightDirective } from '../directives/cource-border-highlight.directive';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { SectionComponent } from '../section/section.component';

import { CourcePageComponent } from './cource-page.component';

describe('CourcePageComponent', () => {
  let component: CourcePageComponent;
  let fixture: ComponentFixture<CourcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourcePageComponent, CourceItemComponent, CourceListComponent, SectionComponent, FilterPipe, OrderByPipe, CourceBorderHighlightDirective ],
      imports: [ CoreModule, 
        NoopAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule ]
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
