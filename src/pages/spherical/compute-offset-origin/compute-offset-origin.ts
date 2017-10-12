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
  selector: 'page-compute-offset-origin',
  templateUrl: 'compute-offset-origin.html',
  providers: [
    Spherical
  ]
})
export class ComputeOffsetOriginPage {
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private spherical: Spherical) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeOffsetOriginPage');
    this.loadMap();
  }

  loadMap() {
    let position: ILatLng = {"lat": 25.775, "lng": -80.190};

    // distance (meter)
    let distance = 300;

    // Calculate the positions
    let offsets = [];
    for (let degree = 0; degree < 360; degree += 45) {
        offsets.push(this.spherical.computeOffsetOrigin(position, distance, degree));
    }

    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: offsets,
        padding: 100
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        offsets.forEach((offset) => {
            this.map.addPolyline({
              'points': [position, offset],
              'color' : '#AA00FF'
            });
        });

    });
  }
}
