import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  HtmlInfoWindow, Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-html-info-set-background-color',
  templateUrl: 'html-info-set-background-color.html',
})
export class HtmlInfoSetBackgroundColorPage {
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
      button.innerText = "click here";
      button.addEventListener("click", function() {
        htmlInfoWindow.setBackgroundColor("#aaaaff");
      });
      infoDiv.appendChild(button);

      htmlInfoWindow.setContent(infoDiv);

      this.map.addMarker({
        position: {lat: 35.685208, lng: -121.168225},
        draggable: true,
        disableAutoPan: true
      }).then((marker: Marker) => {

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
        });
        marker.trigger(GoogleMapsEvent.MARKER_CLICK);

      });
    });
  }
}
