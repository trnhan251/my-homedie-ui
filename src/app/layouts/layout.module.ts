import {NgModule} from '@angular/core';
import {BannerModule, FooterModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';
import {SearchBoxModule} from '../shared/components/search-box/search-box.component';
import {PropertyBoxModule} from '../shared/components/property-box/property-box.component';
import {PropertySidebarListComponent} from './pages/property-sidebar-list/property-sidebar-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    PropertySidebarListComponent
  ],
  imports: [
    HeaderModule,
    BannerModule,
    SearchBoxModule,
    PropertyBoxModule,
    FooterModule
  ],
  exports: [
    HomeComponent,
    PropertySidebarListComponent
  ]
})
export class LayoutModule { }
