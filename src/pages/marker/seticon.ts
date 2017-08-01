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
  selector: 'page-map-setmaptypeid',
  templateUrl: 'setmaptypeid.html',
  providers: [
    GoogleMaps
  ]
})

/**
 *  Rule:
 *    page name :
 *       MapSetMapTypeIdPage <- (ClassName)(MethodName)Page
 *
 *    code:
 *       - please start with loadMap()
 *       - please make the code as same as the original version (as much as possible)
 *       - please add page classes to app/app.module.ts
 */
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

  // You can create event handler if you need.
  // But simple code please.
  onItemSelected(item) {
    this.map.setMapTypeId(GoogleMapsMapTypeId[this.mapTypeId]);
  }
}
