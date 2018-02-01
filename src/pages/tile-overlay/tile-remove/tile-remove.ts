import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  TileOverlay
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-tile-remove',
  templateUrl: 'tile-remove.html',
})
export class TileRemovePage {

  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.map = GoogleMaps.create('map_canvas', {
      'preferences': {
        'zoom': {
          'minZoom': 0,
          'maxZoom': /Android/i.test(window.navigator.userAgent) ? 4 : 3
        }
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      return this.map.addTileOverlay({
        debug: true,  // draw debug infomation on tiles

        opacity: 0.75,  // from 0.0 to 1.0

        // Load image files from the local file path
        getTile: (x: number, y: number, zoom: number) => {
          //return "http://tile.openstreetmap.org/" + zoom + "/" + x + "/" + y + ".png";
          return "../assets/map-for-free/" + zoom + "_" + x + "-" + y + ".gif"
        }
      });
    }).then((tileOverlay: TileOverlay) => {

      // Remove the tile overlay
      this.map.one("remove_tileLayer").then(() => {
        tileOverlay.remove();
      });

    });
  }

  onButton_click() {
    if (this.map) {
      this.map.trigger("remove_tileLayer");
    }
  }
}
