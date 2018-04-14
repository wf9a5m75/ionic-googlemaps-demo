import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-hide-info-window',
  templateUrl: 'hide-info-window.html',
})
export class HideInfoWindowPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let marker: Marker = this.map.addMarkerSync({
        position: {
          lat: 0,
          lng: 0
        },
        title: "Click me!"
      });

      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
        marker.hideInfoWindow();
      });
    });
  }
}
