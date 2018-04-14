import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-remove-marker',
  templateUrl: 'remove-marker.html',
})
export class RemoveMarkerPage {
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
        title: "Click me!",
        snippet: 'Remove this marker.'
      });

      // Open the infoWindow
      marker.showInfoWindow();

      // Catch the MARKER_CLICK event
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
        marker.remove();
      });
    });
  }
}
