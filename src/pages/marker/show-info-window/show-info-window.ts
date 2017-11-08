import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-show-info-window',
  templateUrl: 'show-info-window.html',
})
export class ShowInfoWindowPage {
  map: GoogleMap;

  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        title: "Hello GoogleMap from Cordova!"
      }).then((marker: Marker) => {
        marker.showInfoWindow();
      });
    });
  }
}
