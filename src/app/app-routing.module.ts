import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'cources',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./cources/cources.module').then(m => m.CourcesModule)
  },
  { path: '', redirectTo: '/cources', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
