import {Component, NgModule, OnInit} from '@angular/core';
import {BannerComponent} from '..';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
  ],
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ]
})
export class FooterModule { }
