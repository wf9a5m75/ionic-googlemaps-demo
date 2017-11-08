import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-icon-anchor',
  templateUrl: 'set-icon-anchor.html',
})
export class SetIconAnchorPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      // Add a marker (correct position)
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        zIndex : 2
      });

      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        icon: "./assets/icon/target_icon.png",
        title: 'Click here to fix the icon anchor.',
        zIndex: 1
      }).then((marker: Marker) => {
        marker.showInfoWindow();

        // Catch the MARKER_CLICK event
        marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
          // Change the icon anchor.
          // Set icon anchor point as 24x24 px from the left-top.
          marker.setIconAnchor(24, 24);

          // Change the marker title.
          marker.setTitle("Ta-da!");
          marker.setSnippet("The marker should be the correct position.");

          // Redraw (reopen) the infoWindow.
          marker.showInfoWindow();
        });
      });
    });
  }
}
