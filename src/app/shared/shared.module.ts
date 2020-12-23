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
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateComponent } from './customformcontrols/date/date.component';
import { DurationComponent } from './customformcontrols/duration/duration.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    LoaderComponent,
    LoaderComponent,
    DateComponent,
    DurationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    PageNotFoundComponent,
    LoaderComponent,
    DateComponent,
    DurationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SharedModule { }
