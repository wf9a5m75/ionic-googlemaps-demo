import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  HtmlInfoWindow, Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-html-info-open',
  templateUrl: 'html-info-open.html',
})
export class HtmlInfoOpenPage {
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

      let html:string = "<img src='../assets/House-icon.png' width='64' height='64'>" +
                 "<br>" +
                 "This is an example";

      htmlInfoWindow.setContent(html);

      let marker: Marker = this.map.addMarkerSync({
        position: {lat: 35.685208, lng: -121.168225},
        draggable: true,
        disableAutoPan: true
      });
      
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        htmlInfoWindow.open(marker);
      });
      marker.trigger(GoogleMapsEvent.MARKER_CLICK);

    });
  }
}
