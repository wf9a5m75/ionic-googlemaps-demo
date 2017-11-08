import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-snippet',
  templateUrl: 'set-snippet.html',
})
export class SetSnippetPage {
  map: GoogleMap;

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
        title: "Click me!",
        snippet: 'This is the snippet string.'
      });
    }).then((marker: Marker) => {
      marker.showInfoWindow();

      // Catch the MARKER_CLICK event
      marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
        // Change the marker snippet.
        marker.setSnippet("This plugin is awesome!");

        // Redraw (reopen) the infoWindow.
        marker.showInfoWindow();
      });
    });
  }
}
