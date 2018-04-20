import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-indoor-enabled',
  templateUrl: 'set-indoor-enabled.html',
})
export class SetIndoorEnabledPage {
  map: GoogleMap;
  toggleButton: any;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 37.422375,
          lng: -122.084207
        },
        zoom: 18
      },
      controls: {
        indoorPicker: true
      }
    });

  }


  onToggleChanged() {
    this.map.setIndoorEnabled(this.toggleButton);
  }

}
