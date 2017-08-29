import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-move-camera-zoom-in',
  templateUrl: 'move-camera-zoom-in.html',
})
export class MoveCameraZoomInPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready to use.");
    });
  }

  onButton_click() {
    this.map.moveCameraZoomIn();
  }

}
