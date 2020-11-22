import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CourceModifyComponent } from './cource-modify/cource-modify.component';
import { CourceListComponent } from './cource-list/cource-list.component';
import { CourcePageComponent } from './cource-page/cource-page.component';

const routes: Routes = [
  {
    path: '',
    component: CourcePageComponent,
    children: [
      { path: '', component: CourceListComponent },
      { path: 'new', component: CourceModifyComponent },
      { path: ':id', component: CourceModifyComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourcesRoutingModule { }
