import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-map-type-id',
  templateUrl: 'set-map-type-id.html',
})
export class SetMapTypeIdPage {
  map: GoogleMap;
  mapTypeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    var self=this;
    self.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      mapType: GoogleMapsMapTypeId.ROADMAP
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
  }

  onItemSelected(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[this.mapTypeId]);
  }
}
