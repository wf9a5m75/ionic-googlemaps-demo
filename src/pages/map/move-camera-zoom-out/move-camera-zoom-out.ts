import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-move-camera-zoom-out',
  templateUrl: 'move-camera-zoom-out.html',
})
export class MoveCameraZoomOutPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      "camera": {
        "target": {
          "lat": 37.422858,
          "lng": -122.085065
        },
        "zoom": 15
      }
    });
  }

  onButton_click() {
    this.map.moveCameraZoomOut();
  }

}
