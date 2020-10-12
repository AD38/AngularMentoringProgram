import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourcePageComponent } from './cource-page/cource-page.component';
import { CourceItemComponent } from './cource-item/cource-item.component';

import { CoreModule } from '../core/core.module';
import { SectionComponent } from './section/section.component';
import { CourceListComponent } from './cource-list/cource-list.component';

@NgModule({
  declarations: [CourcePageComponent, CourceItemComponent, SectionComponent, CourceListComponent],
  exports: [CourcePageComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class CourcesModule { }
