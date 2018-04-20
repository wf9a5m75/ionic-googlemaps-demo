import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent,
  VisibleRegion, ILatLng
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-clear',
  templateUrl: 'clear.html',
})
export class ClearPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready to use.");

      // Puts random markers on the map.
      this.createMarkers();
    });
  }

  onButton_click() {
    // Removes the markers completely.
    this.map.clear().then(() => {
      alert("completed");
    });

  }

  createMarkers() {
    let latLngBounds: VisibleRegion = this.map.getVisibleRegion();
    let sw: ILatLng = latLngBounds.southwest;
    let ne: ILatLng = latLngBounds.northeast;
    let diffY: number = (ne.lat - sw.lat);
    let diffX: number = (ne.lng - sw.lng);

    for (let i = 0; i < 100; i++) {
      this.map.addMarkerSync({
        'position': {
          'lat': sw.lat + diffY * Math.random(),
          'lng': sw.lng  + diffX * Math.random()
        }
      });
    }

  }

}
