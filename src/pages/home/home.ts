import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/index';
import { MarkerPage } from '../marker/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map_index: any;
  marker_index: any;

  constructor(public navCtrl: NavController) {
    this.map_index = MapPage;
    this.marker_index = MarkerPage;
  }


}
