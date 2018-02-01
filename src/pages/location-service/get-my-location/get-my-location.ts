import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  LocationService, Marker, ILatLng, MyLocation, HtmlInfoWindow
} from '@ionic-native/google-maps';


/**
 * Generated class for the GetMyLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-my-location',
  templateUrl: 'get-my-location.html',
})
export class GetMyLocationPage {
  map: GoogleMap;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetMyLocationPage');
    this.loadMap();
  }

  loadMap() {
    LocationService.getMyLocation().then((location: MyLocation) => {

      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: location.latLng,
          zoom: 16
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        // Add a marker
        let text:string = ["Current your location:\n",
          "latitude:" + location.latLng.lat.toFixed(3),
          "longitude:" + location.latLng.lng.toFixed(3),
          "speed:" + location.speed,
          "time:" + location.time,
          "bearing:" + location.bearing].join("\n");

        this.map.addMarker({
          position: location.latLng,
          title: text
        }).then((marker: Marker) => {
          marker.showInfoWindow();
        });

      });
    });
  }

}
