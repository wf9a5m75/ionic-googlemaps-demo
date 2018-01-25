import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Geolocation, Marker, ILatLng, MyLocation, HtmlInfoWindow
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
    Geolocation.getMyLocation().then((myLocation: MyLocation) => {

      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: myLocation.latLng,
          zoom: 16
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

        let htmlInfoWindow: HtmlInfoWindow = new HtmlInfoWindow();
        htmlInfoWindow.setContent([
          "Current your location:",
          "",
          JSON.stringify(myLocation, null, 2)
        ].join("\n") , {
          "max-width": "90%"
        });

        this.map.addMarker({
          position: myLocation.latLng
        }).then((marker: Marker) => {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            htmlInfoWindow.open(marker);
          });
        });

      });
    });
  }

}
