import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsMapTypeId} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-map-type-id',
  templateUrl: 'set-map-type-id.html',
})
export class SetMapTypeIdPage {
  map: GoogleMap;
  mapTypeId: any;

  constructor() {}

  ionViewDidLoad() {
    self.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      mapType: GoogleMapsMapTypeId.ROADMAP
    });

  }

  onItemSelected(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[this.mapTypeId]);
  }
}
