import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourceCreateComponent } from './cources/cource-create/cource-create.component';
import { CourceListComponent } from './cources/cource-list/cource-list.component';
import { CourcePageComponent } from './cources/cource-page/cource-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { 
    path: 'cources', 
    component: CourcePageComponent,
    children: [
      {
        path: 'list', // child route path
        component: CourceListComponent,
      },
      {
        path: 'create',
        component: CourceCreateComponent, // another child route component that the router renders
      },
      { path: '',   redirectTo: '/cources/list', pathMatch: 'full' }
    ]
  },
  { path: '',   redirectTo: '/cources/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
