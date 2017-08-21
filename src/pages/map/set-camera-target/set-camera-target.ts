import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-set-camera-target',
  templateUrl: 'set-camera-target.html',
})
export class SetCameraTargetPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create("map_canvas", {
      camera: {
        zoom: 15
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });
  }

  onButton_click() {
    var GOOGLE = {
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
