import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-set-z-index',
  templateUrl: 'set-z-index.html',
})
export class SetZIndexPage {
  map: GoogleMap;
  opacity = 1;

  constructor() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: 37.4419, lng: -122.1419},
        zoom: 13
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      var latLngBounds = this.map.getVisibleRegion();

      let centerLat: number = this.getCenter(latLngBounds).lat;
      let centerLng: number = this.getCenter(latLngBounds).lng - 0.005;
      for (var i = 1; i <= 20; i++) {

        this.map.addMarker({
          position: {
            lat: centerLat,
            lng: centerLng + 0.001 * i
          },
          icon: "green",
          zIndex: i
        });

        this.map.addMarker({
          position: {
            lat: centerLat + 0.005,
            lng: centerLng + 0.001 * i
          },
          icon: "blue",
          zIndex: -i
        });
      }

    });
  }

  getCenter(latLngBounds) {
    var centerLat = (latLngBounds.southwest.lat + latLngBounds.northeast.lat) / 2;

    var swLng = latLngBounds.southwest.lng;
    var neLng = latLngBounds.northeast.lng;
    var sumLng = swLng + neLng;
    var centerLng = sumLng / 2;

    if ((swLng > 0 && neLng < 0 && sumLng < 180)) {
      centerLng += sumLng > 0 ? -180 : 180;
    }
    return new LatLng(centerLat, centerLng);
  }
}
