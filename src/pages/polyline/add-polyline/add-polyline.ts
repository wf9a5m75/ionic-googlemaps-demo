import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, ILatLng } from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-add-polyline',
  templateUrl: 'add-polyline.html',
})
export class AddPolylinePage {
  map: GoogleMap;

  AIR_PORTS: ILatLng[] = [
    {lat: 35.548852, lng: 139.784086},
    {lat: 37.615223, lng: -122.389979},
    {lat: 21.324513, lng: -157.925074},
  ]

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");

      this.map.addPolyline({
        points: this.AIR_PORTS,
        color: "#AA00FF",
        width: 10,
        geodesic: true
      });

      // move the map's camera to position
      this.map.moveCamera({
        target: this.AIR_PORTS
      });
    });

  }
}
