import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-div',
  templateUrl: 'set-div.html',
})
export class SetDivPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

      });
  }

  onButtonClick(event) {
    if (this.map.getDiv()) {
      this.map.setDiv();
    } else {
      this.map.setDiv('map_canvas');
    }
  }
}
