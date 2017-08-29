import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  CameraPosition,
  ILatLng
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-add-polyline',
  templateUrl: 'add-polyline.html',
})
export class AddPolylinePage {
  map: GoogleMap;
  HND_AIR_PORT = {lat: 35.548852, lng: 139.784086};
  SFO_AIR_PORT = {lat: 37.615223, lng: -122.389979};
  HNL_AIR_PORT = {lat: 21.324513, lng: -157.925074};
  AIR_PORTS = [
    this.HND_AIR_PORT,
    this.HNL_AIR_PORT,
    this.SFO_AIR_PORT,
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps
  ) {}

  ionViewDidLoad() {
    var self = this;
    self.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create("map_canvas");

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");

      this.map.addPolyline({
        points: this.AIR_PORTS,
        color: "#AA00FF",
        width: 10,
        geodesic: true
      });


      let position: CameraPosition<ILatLng[]> = {
        target: this.AIR_PORTS
      };

      // move the map's camera to position
      this.map.moveCamera(position);
    });

  }
}
