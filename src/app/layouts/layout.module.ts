import {NgModule} from '@angular/core';
import {BannerModule, FooterModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';
import {SearchBoxModule} from '../shared/components/search-box/search-box.component';
import {PropertyBoxModule} from '../shared/components/property-box/property-box.component';
import {PropertyListComponent} from './pages/property-list/property-list.component';
import {PropertySidebarListComponent} from './pages/property-sidebar-list/property-sidebar-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    PropertyListComponent,
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
    PropertyListComponent,
    PropertySidebarListComponent
  ]
})
export class LayoutModule { }
