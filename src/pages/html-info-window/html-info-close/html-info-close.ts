import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  HtmlInfoWindow, Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-html-info-close',
  templateUrl: 'html-info-close.html',
})
export class HtmlInfoClosePage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: 35.685208, lng: -121.168225},
        zoom: 5
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let htmlInfoWindow = new HtmlInfoWindow();

      let infoDiv: any = document.createElement("div");
      infoDiv.innerHTML = "Click the below button.&lt;br&gt;";

      let button: any = document.createElement("button");
      button.innerText = "Close this infoWindow";
      button.addEventListener("click", function() {
        htmlInfoWindow.close();
      });
      infoDiv.appendChild(button);

      htmlInfoWindow.setContent(infoDiv);

      let marker: Marker = this.map.addMarkerSync({
        position: {lat: 35.685208, lng: -121.168225},
        draggable: true,
        disableAutoPan: true
      });

      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        htmlInfoWindow.open(marker);
      });

    });
  }
}
