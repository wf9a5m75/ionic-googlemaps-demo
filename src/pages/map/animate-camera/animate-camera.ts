import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-animate-camera',
  templateUrl: 'animate-camera.html'
})
export class AnimateCameraPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('map is ready');
    });
  }

  onButton_click() {
    this.map.animateCamera({
      target: {lat: 37.422359, lng: -122.084344},
      zoom: 17,
      tilt: 60,
      bearing: 140,
      duration: 5000,
      padding: 0  // default = 20px
    }).then(() => {
      alert("Camera target has been changed");
    });

  }

}
