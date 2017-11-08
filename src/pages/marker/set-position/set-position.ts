import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-position',
  templateUrl: 'set-position.html',
})
export class SetPositionPage {
  map: GoogleMap;
  marker: Marker;

  constructor() {}

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
        },
        'title': 'Click me!'
      });
    }).then((marker: Marker) => {
      this.marker = marker;
      this.marker.showInfoWindow();
      this.marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(()=> {
        // Change the marker position.
        this.marker.setPosition({
          lat: 20,
          lng: 20
        });
      });
    });
  }
}
