import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-move-camera-zoom-in',
  templateUrl: 'move-camera-zoom-in.html',
})
export class MoveCameraZoomInPage {
  map: GoogleMap;

  constructor() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');
  }

  onButton_click() {
    this.map.moveCameraZoomIn();
  }

}
