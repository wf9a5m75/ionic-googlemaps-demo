import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  ILatLng, GroundOverlay, Marker, BaseArrayClass
} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-ground-overlay-set-bounds',
  templateUrl: 'ground-overlay-set-bounds.html',
})
export class GroundOverlaySetBoundsPage {
  map: GoogleMap;
  groundOverlay: GroundOverlay;
  markers: Marker[] = [];

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

    // Add ground overlay
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': "assets/newark_nj_1922.jpg",
      'bounds': bounds,
      'opacity': 0.5
    });

    bounds.forEach((position: ILatLng) => {

      let marker: Marker = this.map.addMarkerSync({
        'position': position,
        'draggable': true
      });
      marker.on("position_changed").subscribe(this.onPositionChanged.bind(this));

      this.markers.push(marker);
    });

  }

  onPositionChanged(params: any[]) {
    // params = [ oldPositon: ILatLng, newPositon: ILatLng, marker: Marker]
    let marker: Marker = params.pop();

    this.groundOverlay.setBounds([
      this.markers[0].getPosition(),
      this.markers[1].getPosition()
    ]);
  }
}
