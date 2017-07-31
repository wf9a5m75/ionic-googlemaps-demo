import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the MapGetMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-get-map',
  templateUrl: 'map-get-map.html',
  providers: [
    GoogleMaps
  ]
})
export class MapGetMapPage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, public platform: Platform) {    // Wait the native plugin is ready.
    platform.ready().then(() => {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapGetMapPage');
      this.loadMap();
  }
 loadMap() {
    this.mapElement = document.getElementById('map');
      console.log(this.mapElement);

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
  }

}
