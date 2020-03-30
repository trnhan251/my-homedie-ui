import {Component, NgModule, OnInit} from '@angular/core';
import {SearchBoxComponent} from '../search-box/search-box.component';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@NgModule({
  imports: [
  ],
  declarations: [ PropertyBoxComponent ],
  exports: [ PropertyBoxComponent ]
})
export class PropertyBoxModule { }

