import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the PanByPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pan-by',
  templateUrl: 'pan-by.html',
})
export class PanByPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: 35, lng: 138},
        zoom: 10
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Draw grids
        let canvas:any = document.getElementById("grid_canvas");
        let h = this.map.getDiv().offsetHeight,
          w = this.map.getDiv().offsetWidth;
        canvas.width = w;
        canvas.height = h;

        let ctx = canvas.getContext('2d');
        for (let y = 50; y < h; y+= 50) {
          ctx.beginPath();
          ctx.setLineDash([5,5,5]);
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
        for (let x = 50; x < w; x+= 50) {
          ctx.beginPath();
          ctx.setLineDash([5,5,5]);
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }

        // Add a marker
        this.map.fromPointToLatLng([50, 100]).then((latLng: LatLng) => {
          this.map.addMarker({
            position: latLng
          });
        });

      });
  }

  onButtonClick(event) {
    if(this.map) {
      this.map.panBy(50, 50);
    }
  }

}
