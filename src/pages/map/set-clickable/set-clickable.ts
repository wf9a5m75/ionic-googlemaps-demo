import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

/**
 * Generated class for the SetClickablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-clickable',
  templateUrl: 'set-clickable.html',
})
export class SetClickablePage {
  map: GoogleMap;

  clickable: boolean = true;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");

      this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(() => {
        alert("Click!");
      });
    });
  }

  onButtonClick(event) {
    if (this.map) {
      this.clickable = !this.clickable;
      this.map.setClickable(this.clickable);
    }
  }
}
