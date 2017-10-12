import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Spherical,
  Marker,
  ILatLng
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-interpolate',
  templateUrl: 'interpolate.html',
  providers: [
    Spherical
  ]
})
export class InterpolatePage {
  map: GoogleMap;
  nyc: ILatLng = {"lat": 40.715, "lng": -74.002};
  london: ILatLng = {"lat": 51.506, "lng": -0.119};
  points = [this.nyc, this.london];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private spherical: Spherical) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: this.points,
        padding: 100
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      this.map.addPolyline({
        "points": this.points,
        "geodesic": true
      });

      this.map.addMarker({
        position: this.nyc
      }).then((marker: Marker) => {

        let fraction = 0;
        let direction = 1;
        setInterval(() => {
          fraction += 0.01 * direction;
          if (fraction >= 1) {
            direction = -1;
          } else if (fraction <= 0) {
            direction = 1;
          }

          marker.setPosition(this.spherical.interpolate(this.nyc, this.london, fraction));
        }, 50);

      });
    });
  }
}
