import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  ILatLng, GroundOverlay
} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-ground-overlay-set-opacity',
  templateUrl: 'ground-overlay-set-opacity.html',
})
export class GroundOverlaySetOpacityPage {
  map: GoogleMap;
  opacity: number = 100;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let bounds: ILatLng[] = [
      {"lat": 40.712216, "lng": -74.22655},
      {"lat": 40.773941, "lng": -74.12544}
    ];

    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: bounds
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Add ground overlay
      return this.map.addGroundOverlay({
        'url': "assets/newark_nj_1922.jpg",
        'bounds': bounds,
        'opacity': 0.5,
        'clickable': true  // default = false
      });
    }).then((groundOverlay: GroundOverlay) => {

      this.map.on("opacityChange").subscribe(() => {
        groundOverlay.setOpacity(this.opacity / 100);
      });

    });
  }

  onOpacityChange() {
    if (this.map) {
      this.map.trigger("opacityChange");
    }
  }
}
