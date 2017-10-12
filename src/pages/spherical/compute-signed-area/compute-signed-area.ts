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
  selector: 'page-compute-signed-area',
  templateUrl: 'compute-signed-area.html',
  providers: [
    Spherical
  ]
})
export class ComputeSignedAreaPage {
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    private spherical: Spherical) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeSignedAreaPage');
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

    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: points,
        padding : 100
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      this.map.addPolyline({
        "points": points
      });

      let signedArea = this.spherical.computeSignedArea(points);

      this.map.addMarker({
        position: points[0],
        title: "This polyline is \n" +
              (signedArea < 0 ? "clockwise" : "counter clockwise")
      }).then((marker: Marker) => {
        marker.showInfoWindow();
      });

    });
  }
}
