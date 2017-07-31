import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapGetMapPage } from '../map-get-map/map-get-map';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  map_getMap: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.map_getMap = MapGetMapPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
