import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  TileOverlay,
  BaseArrayClass
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-tile-set-z-index',
  templateUrl: 'tile-set-z-index.html',
})
export class TileSetZIndexPage {

  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let tileList: string[] = [
      "../assets/map-for-free/{zoom}_{x}-{y}.gif",
      "http://tile.stamen.com/toner/{zoom}/{x}/{y}.png"
    ];

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

      let mvcArray: BaseArrayClass<string> = new BaseArrayClass<string>(tileList);
      return mvcArray.mapSeries((layerUrl: string, next: (layer: TileOverlay) => void) => {

        this.map.addTileOverlay({
          getTile: (x: number, y: number, zoom: number) => {
            return layerUrl.replace("{zoom}", zoom + "")
                      .replace("{x}", x + "")
                      .replace("{y}", y + "");
          }
        }).then(next);

      });

    }).then((layers: TileOverlay[]) => {

      // Change the property
      this.map.on("buttonClick").subscribe(() => {
        layers = layers.reverse();
        layers.forEach((layer: TileOverlay, idx: number) => {
          layer.setZIndex(idx);
        });
      });

    });
  }

  onButton_click() {
    if (this.map) {
      this.map.trigger("buttonClick");
    }
  }
}
