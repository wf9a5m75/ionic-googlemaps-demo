import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  KmlOverlay, GoogleMapsMapTypeId
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-add-kml-overlay',
  templateUrl: 'add-kml-overlay.html',
})
export class AddKmlOverlayPage {
  kmlFileUrl: string = null;

  map: GoogleMap;
  mapTypeId: any;

  constructor() {}

  ionViewDidLoad() {
    var self=this;
    self.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      mapType: GoogleMapsMapTypeId.SATELLITE
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
    });
  }

  onItemSelected(item) {
    if (!this.kmlFileUrl || this.kmlFileUrl === "Select one kml file") {
      return;
    }

    this.map.clear();

    this.map.addKmlOverlay({
      'url': this.kmlFileUrl
    })
    .then((kmlOverlay: KmlOverlay) => {

    });
  }

}
