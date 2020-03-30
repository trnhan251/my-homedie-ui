import {NgModule} from '@angular/core';
import {BannerModule, HeaderModule} from '../shared/components';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule,
    BannerModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LayoutModule { }
