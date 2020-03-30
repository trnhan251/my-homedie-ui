import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderModule} from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './layouts/pages/home/home.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, HeaderModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule { }
