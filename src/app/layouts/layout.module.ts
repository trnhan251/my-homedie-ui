import {NgModule} from '@angular/core';
import {BannerModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';
import {SearchBoxModule} from '../shared/components/search-box/search-box.component';
import {PropertyBoxModule} from '../shared/components/property-box/property-box.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule,
    BannerModule,
    SearchBoxModule,
    PropertyBoxModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LayoutModule { }
