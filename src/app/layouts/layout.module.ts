import {NgModule} from '@angular/core';
import { HeaderModule } from '../shared/components';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule
  ],
  exports: [
    HomeComponent
  ]
})
export class LayoutModule { }
