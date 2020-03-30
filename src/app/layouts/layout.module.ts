import {NgModule} from '@angular/core';
import {BannerModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';
import {SearchBoxModule} from '../shared/components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule,
    BannerModule,
    SearchBoxModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LayoutModule { }
