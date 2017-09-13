import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-indoor-enabled',
  templateUrl: 'set-indoor-enabled.html',
})
export class SetIndoorEnabledPage {
  map: GoogleMap;
  toggleButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    var self = this;
    setTimeout(self.loadMap.bind(self), 1000);
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
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

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
  }


  onToggleChanged() {
    this.map.setIndoorEnabled(this.toggleButton);
  }

}
