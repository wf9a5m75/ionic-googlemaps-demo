import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-from-point-to-lat-lng',
  templateUrl: 'from-point-to-lat-lng.html',
})
export class FromPointToLatLngPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    var self = this;
    setTimeout(self.loadMap.bind(self), 1000);
  }

  loadMap() {
    var self = this;

    var mapDiv = document.getElementById('map_canvas');

    this.map = this.googleMaps.create(mapDiv);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      self.map.setClickable(false);

      mapDiv.addEventListener("click", (e) => {

        // Get the tapped position by pixels
        var clickX = e.pageX - mapDiv.offsetLeft;
        var clickY = e.pageY - mapDiv.offsetTop;

        // Convert point to LatLng.
        self.map.fromPointToLatLng([clickX, clickY]).then((latLng: LatLng) => {
console.log(latLng.toUrlValue());
          // Add a marker
          self.map.addMarker({
            position: latLng,
            title: [
              "Point: x = " + clickX + ", y = " + clickY,
              "LatLng: " + latLng.toUrlValue()
            ].join("\n")
          }).then((marker: Marker) => {
            marker.showInfoWindow();
          });
        });
      });
    });
  }
}
