import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-set-my-location-enabled',
  templateUrl: 'set-my-location-enabled.html',
})
export class SetMyLocationEnabledPage {
  map: GoogleMap;
  isMapReady: boolean;
  myLocationButtonEnabled: boolean;
  toggleButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    var self = this;
    setTimeout(self.loadMap.bind(self), 1000);
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      controls: {
        myLocationButton: false
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.isMapReady = true;
      });
  }


  onToggleChanged() {
    this.map.setMyLocationEnabled(this.toggleButton);
  }
}
