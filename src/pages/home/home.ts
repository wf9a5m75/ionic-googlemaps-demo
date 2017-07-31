import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map_index: any;

  constructor(public navCtrl: NavController) {
    this.map_index = MapPage;
  }

  goToMapPage() {
    this.navCtrl.push(MapPage);
  }

}
