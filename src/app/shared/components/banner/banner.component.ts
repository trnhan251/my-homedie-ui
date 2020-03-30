import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {HeaderComponent, UserPanelModule} from '..';
import {DxToolbarModule} from 'devextreme-angular/ui/toolbar';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@NgModule({
  imports: [
  ],
  declarations: [ BannerComponent ],
  exports: [ BannerComponent ]
})
export class BannerModule { }
