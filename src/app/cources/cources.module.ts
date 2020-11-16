import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcePageComponent } from './cource-page/cource-page.component';
import { CourceItemComponent } from './cource-item/cource-item.component';

import { SectionComponent } from './section/section.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CourceBorderHighlightDirective } from './directives/cource-border-highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedModule } from '../shared/shared.module';
import { CourceCreateComponent } from './cource-create/cource-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CourcePageComponent, CourceItemComponent, SectionComponent, CourceListComponent, CourceBorderHighlightDirective, FilterPipe, OrderByPipe, CourceCreateComponent],
  exports: [CourcePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    RouterModule
  ]
})
export class CourcesModule { }
