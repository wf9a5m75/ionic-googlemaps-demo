import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Spherical,
  BaseArrayClass,
  ILatLng
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-compute-length',
  templateUrl: 'compute-length.html',
})
export class ComputeLengthPage {

  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let points: ILatLng[] = [
      {lat: 51.511077, lng: -0.119245},
      {lat: 51.504986, lng: -0.113911},
      {lat: 51.504532, lng: -0.113776},
      {lat: 51.501627, lng: -0.116714},
      {lat: 51.501082, lng: -0.115802},
      {lat: 51.500663, lng: -0.115511},
      {lat: 51.500346, lng: -0.116477},
      {lat: 51.500101, lng: -0.116925},
      {lat: 51.50059, lng: -0.117819},
      {lat: 51.500881, lng: -0.125734},
      {lat: 51.504042, lng: -0.126174},
      {lat: 51.50689, lng: -0.127602},
      {lat: 51.509784, lng: -0.122767}
    ];

    this.map = GoogleMaps.create('map_canvas', {
      'camera': {
        'target': points,
        'padding' : 100
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      this.map.addPolyline({
        "points": points
      });

      let mvcArray: BaseArrayClass<ILatLng> = new BaseArrayClass<ILatLng>();
      mvcArray.on("insert_at").subscribe((idx: number) => {
        let distance: number = Spherical.computeLength(mvcArray);
        this.map.addMarker({
          "position": mvcArray.getAt(idx),
          "title": "Distance from start : " + distance.toFixed(0) + " m"
        });
      });

      points.forEach((position: ILatLng, idx: number) => {
        mvcArray.push(position);
      });

    });

  }
}
