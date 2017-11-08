import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  selector: 'page-compute-offset',
  templateUrl: 'compute-offset.html'
})
export class ComputeOffsetPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeOffsetPage');
    this.loadMap();
  }

  loadMap() {
    let center: ILatLng = {"lat": 32, "lng": -97};

    // radius (meter)
    let radius = 300;

    // Calculate the positions
    let offsets = [];
    for (var degree = 0; degree < 360; degree += 45) {
        offsets.push(Spherical.computeOffset(center, radius, degree));
    }

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: offsets,
        padding: 100
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        offsets.forEach((offset) => {
            this.map.addPolyline({
              'points': [center, offset],
              'color' : '#AA00FF'
            });
        });

    });
  }
}
