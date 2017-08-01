import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-position',
  templateUrl: 'get-position.html',
})
export class GetPositionPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        this.map.addMarker({
          position: {
            lat: 0,
            lng: 0
          }
        })
          .then(marker => { });
      });
  }
}
