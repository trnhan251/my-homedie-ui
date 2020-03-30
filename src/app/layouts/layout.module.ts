import {NgModule} from '@angular/core';
import {BannerModule, FooterModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';
import {SearchBoxModule} from '../shared/components/search-box/search-box.component';
import {PropertyBoxModule} from '../shared/components/property-box/property-box.component';
import {PropertyListComponent} from './pages/property-list/property-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    PropertyListComponent
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
    PropertyListComponent
  ]
})
export class LayoutModule { }
