import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  HtmlInfoWindow, Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-new-html-info-window',
  templateUrl: 'new-html-info-window.html',
})
export class NewHtmlInfoWindowPage {
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

      let frame: HTMLElement = document.createElement('div');
      frame.innerHTML = [
        '<h3>Hearst Castle</h3>',
        '<img src="assets/hearst_castle.jpg">'
      ].join("");
      frame.getElementsByTagName("img")[0].addEventListener("click", () => {
        htmlInfoWindow.setBackgroundColor('red');
      });
      htmlInfoWindow.setContent(frame, {
        width: "280px",
        height: "330px"
      });

      this.map.addMarker({
        position: {lat: 35.685208, lng: -121.168225},
        draggable: true,
        disableAutoPan: true
      }).then((marker: Marker) => {

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
        });

      });
    });
  }
}
