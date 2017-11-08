import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor() { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
