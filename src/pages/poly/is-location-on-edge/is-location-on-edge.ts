import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  Poly, Polyline, GoogleMaps, GoogleMap, GoogleMapsEvent,
  LatLngBounds, Marker, ILatLng
} from '@ionic-native/google-maps';

/**
 * Generated class for the IsLocationOnEdgePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-is-location-on-edge',
  templateUrl: 'is-location-on-edge.html',
})
export class IsLocationOnEdgePage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IsLocationOnEdgePage');
    this.loadMap();
  }

  PATH: ILatLng[] =  [
    {lat: 1, lng: 1},
    {lat: -1, lng: -1},
    {lat: 0.3, lng: -0.5},
    {lat: 1.5, lng: 1.2}
  ];

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'gestures': {
        'scroll': false,
        'tilt': false,
        'rotate': false,
        'zoom': false
      },
      camera: {
        target: this.PATH
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        // Add a polyline
        return this.map.addPolyline({
          'points': this.PATH,
          'color' : '#AA00FF',
          'width': 5
        });
      })
      .then((polyline: Polyline) => {
        // Add a marker
        return this.map.addMarker({
          'position': (new LatLngBounds(this.PATH)).getCenter(),
          'draggable': true,
          'title': 'drag me!'
        });
      })
      .then((marker: Marker) => {
        // Open the infoWindow
        marker.showInfoWindow();

        // If the marker position is changed,
        // calculates the position is on the edge.
        // If on the edge, change the marker color to "blue", otherwise, "red".
        marker.on("position_changed").subscribe(() => {
          let position: ILatLng = marker.getPosition();
          let isOnEdge: boolean = Poly.isLocationOnEdge(position, this.PATH);
          marker.setIcon(isOnEdge ? "blue" : "red");
        });

        // Fire the position_changed event for the first calculation
        marker.trigger("position_changed");
      });
  }
}
