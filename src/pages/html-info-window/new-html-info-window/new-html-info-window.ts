import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  HtmlInfoWindow,
  Marker,
  ILatLng
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-new-html-info-window',
  templateUrl: 'new-html-info-window.html',
  providers: [
    HtmlInfoWindow
  ]
})
export class NewHtmlInfoWindowPage {
  map: GoogleMap;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewHtmlInfoWindowPage');
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let htmlInfoWindow = new HtmlInfoWindow();

      let html: string = [
        'This is <b>Html</b> InfoWindow',
        '<br>',
        '<button onclick="javascript:alert(\'clicked!\');">click here</button>',
      ].join("");
      htmlInfoWindow.setContent(html);

      this.map.addMarker({
        position: {lat: 0, lng: 0},
        draggable: true
      }).then((marker: Marker) => {

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
        });
        marker.trigger(GoogleMapsEvent.MARKER_CLICK);

      });
    });
  }
}
