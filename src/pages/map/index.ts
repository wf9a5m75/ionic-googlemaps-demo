import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapGetMapPage } from './getmap';
import { MapSetDivPage } from './setdiv';
import { MapSetMapTypeIdPage } from './setmaptypeid';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'index.html',
})

export class MapPage {
  getMap: any;
  setDiv: any;
  setMapTypeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getMap = MapGetMapPage;
    this.setDiv = MapSetDivPage;
    this.setMapTypeId = MapSetMapTypeIdPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
