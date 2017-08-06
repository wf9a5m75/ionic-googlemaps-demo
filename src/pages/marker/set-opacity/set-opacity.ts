import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

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
