import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-animate-camera-zoom-in',
  templateUrl: 'animate-camera-zoom-in.html',
})
export class AnimateCameraZoomInPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('map is ready');
    });
  }

  onButton_click() {
    this.map.animateCameraZoomIn();
  }
}
