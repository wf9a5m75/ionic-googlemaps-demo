import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

/**
 * Generated class for the PanByPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pan-by',
  templateUrl: 'pan-by.html',
})
export class PanByPage {
  map: GoogleMap;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    var self=this;
    self.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

      });
  }

  onButtonClick(event) {
    if(this.map) {
      this.map.panBy(100, 50);
    }
  }

}
