import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';


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

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
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
