import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-from-point-to-lat-lng',
  templateUrl: 'from-point-to-lat-lng.html',
})
export class FromPointToLatLngPage {
  map: GoogleMap;

  constructor() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      this.map.setClickable(false);

      let mapDiv: any = this.map.getDiv();

      mapDiv.addEventListener("click", (e) => {
        // Get the tapped position by pixels
        let clickX: number = e.pageX - mapDiv.offsetLeft;
        let clickY: number = e.pageY - mapDiv.offsetTop;

        // Trigger the `div_click` event
        this.map.trigger('div_click', clickX, clickY);
      });

      this.map.on('div_click').subscribe((params: any[]) => {
        let clickX: number = params[0];
        let clickY: number = params[1];

        // Convert point to LatLng.
        this.map.fromPointToLatLng(params).then((latLng: LatLng) => {
          console.log(latLng.toUrlValue());
          // Add a marker
          this.map.addMarker({
            position: latLng,
            title: [
              "Point: x = " + clickX + ", y = " + clickY,
              "LatLng: " + latLng.toUrlValue()
            ].join("\n")
          }).then((marker: Marker) => {
            marker.showInfoWindow();
          });
        });
      });
    });
  }
}
