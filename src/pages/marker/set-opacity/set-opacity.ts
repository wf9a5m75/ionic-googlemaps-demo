import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-opacity',
  templateUrl: 'set-opacity.html',
})
export class SetOpacityPage {
  map: GoogleMap;
  opacity = 1;
  marker: Marker;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.setAllGesturesEnabled(false);

      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        }
      }).then((marker: Marker) => {
        this.marker = marker;

        this.marker.setOpacity(this.opacity);
      });
    });
  }

  onChange(event) {
    this.marker.setOpacity(event);
  }
}
