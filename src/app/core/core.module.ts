import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumbComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }