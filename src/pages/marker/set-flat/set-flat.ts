import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, ILatLng} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-flat',
  templateUrl: 'set-flat.html',
})
export class SetFlatPage {

  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let GOOGLE: ILatLng = {lat: 37.422359, lng: -122.084344};

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: GOOGLE,
        zoom: 17,
        tilt: 60,
        bearing: 140
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Default marker
      this.map.addMarker({
        position: GOOGLE
      });

      // Flat marker
      this.map.addMarker({
        position: GOOGLE,
        flat : false     // You can also specify with this property
      }).then((marker: Marker) => {

        // Marker is going to be flat (like ground overlay)
        marker.setFlat(true);

      });
    });
  }
}
