import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  ILatLng, Polyline
} from '@ionic-native/google-maps';

/**
 * Generated class for the RemovePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polyline-remove',
  templateUrl: 'polyline-remove.html',
})
export class PolylineRemovePage {

  map: GoogleMap;
  AIR_PORTS: ILatLng[] = [
    {lat: 35.548852, lng: 139.784086},
    {lat: 37.615223, lng: -122.389979},
    {lat: 21.324513, lng: -157.925074}
  ];


  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolylineRemovePage');
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: this.AIR_PORTS
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      // Add a polyline
      return this.map.addPolyline({
        points: this.AIR_PORTS,
        'color' : '#AA00FF',
        'width': 10,
        'geodesic': true,
        'clickable': true // default = false
      });
    }).
    then((polyline: Polyline) => {

      polyline.one(GoogleMapsEvent.POLYLINE_CLICK).then(() => {
        polyline.remove();
      });
    });
  }
}
