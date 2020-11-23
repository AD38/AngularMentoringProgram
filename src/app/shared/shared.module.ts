import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbComponent, PageNotFoundComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
