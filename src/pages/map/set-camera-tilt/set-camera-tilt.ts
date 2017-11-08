import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-camera-tilt',
  templateUrl: 'set-camera-tilt.html',
})
export class SetCameraTiltPage {
  map: GoogleMap;
  tilt: number;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.tilt = 0;
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: 37.422858,
          lng: -122.085065
        },
        zoom: 15
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });
  }

  onButton_click() {
    this.tilt += 45;
    this.map.setCameraTilt(this.tilt);
  }
}
