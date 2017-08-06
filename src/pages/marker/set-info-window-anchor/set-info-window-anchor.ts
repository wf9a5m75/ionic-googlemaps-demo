import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-info-window-anchor',
  templateUrl: 'set-info-window-anchor.html',
})
export class SetInfoWindowAnchorPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        icon: {
          url: './assets/icon/target_icon.png',
          anchor: [24, 24]
        },
        title: 'Click me!'
      }).then((marker: Marker) => {
        marker.showInfoWindow();

        // Catch the MARKER_CLICK event
        marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
          // Set the infoWindow anchor at 24x24px from the left-top of the icon.
          marker.setInfoWindowAnchor(24, 24);
        });
      });
    });
  }
}
