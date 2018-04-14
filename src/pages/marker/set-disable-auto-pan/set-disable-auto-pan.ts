import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-disable-auto-pan',
  templateUrl: 'set-disable-auto-pan.html',
})
export class SetDisableAutoPanPage {
  map: GoogleMap;
  marker: Marker;
  isDisabled: boolean = true;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.marker = this.map.addMarkerSync({
        position: {
          lat: 0,
          lng: 0
        },
        'animation': GoogleMapsAnimation.BOUNCE,
        'title': 'The map does not move when you click on this marker.'
      });

      this.toggleDisable();
    });
  }

  toggleDisable() {
    this.marker.setDisableAutoPan(this.isDisabled);
  }
}
