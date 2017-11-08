import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-set-visible',
  templateUrl: 'set-visible.html',
})
export class SetVisiblePage {
  map: GoogleMap;
  marker: Marker;

  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      return this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        }
      });
    }).then((marker: Marker) => {
      this.marker = marker;
    });
  }

  toggleVisibility() {
    this.marker.setVisible(!this.marker.isVisible());
  }
}
