import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-camera-zoom',
  templateUrl: 'set-camera-zoom.html',
})
export class SetCameraZoomPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: 37.422858,
          lng: -122.085065
        }
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });
  }

  onButton_click() {
    this.map.setCameraZoom(10);
  }
}
