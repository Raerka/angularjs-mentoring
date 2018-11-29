import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ToolboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolboxComponent
  ]
})
export class CoreModule { }
