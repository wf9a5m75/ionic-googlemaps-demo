import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-set-title',
  templateUrl: 'set-title.html',
})
export class SetTitlePage {
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
        title: "Click me!"
      }).then((marker: Marker) => {
        marker.showInfoWindow();

        // Catch the MARKER_CLICK event
        marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
          // Change the marker title
          marker.setTitle("Clicked!");

          // Redraw (reopen) the infoWindow.
          marker.showInfoWindow();
        });
      });
    });
  }
}
