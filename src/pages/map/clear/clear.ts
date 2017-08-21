import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-clear',
  templateUrl: 'clear.html',
})
export class ClearPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    var self = this;
    this.map = this.googleMaps.create('map_canvas');
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready to use.");

      // Puts random markers on the map.
      self.createMarkers();
    });
  }

  onButton_click() {
    // Removes the markers completely.
    this.map.clear().then(() => {
      alert("completed");
    });

  }

  createMarkers() {
    var latLngBounds = this.map.getVisibleRegion();
    var sw = latLngBounds.southwest;
    var ne = latLngBounds.northeast;
    var diffY = (ne.lat - sw.lat);
    var diffX = (ne.lng - sw.lng);
    for (var i = 0; i < 100; i++) {
      this.map.addMarker({
        'position': {
          'lat': sw.lat + diffY * Math.random(),
          'lng': sw.lng  + diffX * Math.random()
        }
      });
    }

  }

}
