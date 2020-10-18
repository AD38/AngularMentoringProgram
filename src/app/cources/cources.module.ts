import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcePageComponent } from './cource-page/cource-page.component';
import { CourceItemComponent } from './cource-item/cource-item.component';

import { CoreModule } from '../core/core.module';
import { SectionComponent } from './section/section.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule}  from '@angular/material/input';

@NgModule({
  declarations: [CourcePageComponent, CourceItemComponent, SectionComponent, CourceListComponent],
  exports: [CourcePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class CourcesModule { }
