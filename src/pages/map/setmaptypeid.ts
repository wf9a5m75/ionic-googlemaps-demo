import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsMapTypeId
} from '@ionic-native/google-maps';

/**
 * Generated class for the MapGetMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-setmaptypeid',
  templateUrl: 'setmaptypeid.html',
  providers: [
    GoogleMaps
  ]
})
export class MapSetMapTypeIdPage {
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
