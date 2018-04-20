import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Marker, ILatLng
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-camera-target',
  templateUrl: 'set-camera-target.html',
})
export class SetCameraTargetPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        zoom: 15
      }
    });
  }

  onButton_click() {
    let GOOGLE: ILatLng = {
      lat: 37.422858,
      lng: -122.085065
    };
    this.map.setCameraTarget(GOOGLE);

    this.map.addMarker({
      position: GOOGLE,
      title: "Google"
    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
  }
}
