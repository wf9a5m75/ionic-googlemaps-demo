import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-rotation',
  templateUrl: 'set-rotation.html',
})
export class SetRotationPage {

  map: GoogleMap;
  rotation: number = 0;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Default marker
      this.map.addMarker({
        'position': {
          lat: 0,
          lng: 0
        }
      }).then((marker: Marker) => {

        this.map.on("rangeChange").subscribe(() => {
          // Set the marker rotation angle.
          marker.setRotation(this.rotation);
        });

      });
    });
  }

  onRangeChange() {
    if (this.map) {
      this.map.trigger("rangeChange");
    }
  }
}
