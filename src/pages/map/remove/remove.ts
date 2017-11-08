import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component(...)
export class RemovePage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready to use.");
    });
  }

  onButton_click() {
    this.map.remove();
  }
}
