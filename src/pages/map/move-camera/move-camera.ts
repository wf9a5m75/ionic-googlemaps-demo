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
  selector: 'page-move-camera',
  templateUrl: 'move-camera.html',
})
export class MoveCameraPage {
  map1: GoogleMap;
  map2: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    let self = this;
    this.loadMap1();
    this.loadMap2();
  }

  loadMap1() {
    this.map1 = this.googleMaps.create('map_canvas1');
    this.map1.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map1 is ready");
    });
  }

  onButton1_click() {
    this.map1.moveCamera({
      target: {lat: 37.422359, lng: -122.084344},
      zoom: 17,
      tilt: 60,
      bearing: 140
    }).then(() => {
      alert("Camera target has been changed");
    });
  }

  loadMap2() {
    this.map2 = this.googleMaps.create('map_canvas2');
    this.map2.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map2 is ready");
    });
  }

  onButton2_click() {
    this.map2.moveCamera({
      target: [
        {lat:41.79883, lng:140.75675},
        {lat:41.799240000000005, lng:140.75875000000002},
        {lat:41.797650000000004, lng:140.75905},
        {lat:41.79637, lng:140.76018000000002},
        {lat:41.79567, lng:140.75845},
        {lat:41.794470000000004, lng:140.75714000000002},
        {lat:41.795010000000005, lng:140.75611},
        {lat:41.79477000000001, lng:140.75484},
        {lat:41.79576, lng:140.75475},
        {lat:41.796150000000004, lng:140.75364000000002},
        {lat:41.79744, lng:140.75454000000002},
        {lat:41.79909000000001, lng:140.75465},
        {lat:41.79883, lng:140.75673}
      ],
      zoom: 17,
      tilt: 60,
      bearing: 140
    }).then(() => {
      alert("Camera target has been changed");
    });
  }

}
