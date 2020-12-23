import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcePageComponent } from './cource-page/cource-page.component';
import { CourceItemComponent } from './cource-item/cource-item.component';

import { SectionComponent } from './section/section.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CourceBorderHighlightDirective } from './directives/cource-border-highlight.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedModule } from '../shared/shared.module';
import { CourceModifyComponent } from './cource-modify/cource-modify.component';
import { RouterModule } from '@angular/router';
import { CourcesRoutingModule } from './cources-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCources from './store/reducers/cources.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourcesEffects } from './store/cources.effects';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    CourcePageComponent,
    CourceItemComponent,
    SectionComponent,
    CourceListComponent,
    CourceBorderHighlightDirective,
    FilterPipe,
    OrderByPipe,
    CourceModifyComponent,
    AuthorsComponent
  ],
  exports: [CourcePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule,
    CourcesRoutingModule,
    StoreModule.forFeature(fromCources.courcesFeatureKey, fromCources.reducer),
    EffectsModule.forFeature([CourcesEffects])
  ]
})
export class CourcesModule { }
