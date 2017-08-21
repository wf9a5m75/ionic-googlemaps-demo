import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-visible-region',
  templateUrl: 'get-visible-region.html',
})
export class GetVisibleRegionPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    var self = this;
    setTimeout(this.loadMap.bind(self), 1000);
  }

  loadMap() {
    this.map = this.googleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: 37.422858,
          lng: -122.085065
        },
        zoom: 15,
        bearing: 150
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });
  }

  onButton_click() {
    var self = this;

    // Get the visible region
    var visibleRegion = this.map.getVisibleRegion();

    // Draw a red polygon that represents viewport
    this.map.addPolygon({
      'points': [
        visibleRegion.nearLeft,
        visibleRegion.nearRight,
        visibleRegion.farRight,
        visibleRegion.farLeft
      ],
      'strokeColor' : 'red',
      'strokeWidth': 2,
      'fillColor': 'rgba(255, 0, 0, 0.5)'
    }).then(() => {
      setTimeout(() => {
        self.map.animateCameraZoomOut()
      }, 1000);
    });

    // Draw a blue box that represents latLngBounds
    this.map.addPolygon({
      'points': [
        visibleRegion.northeast,
        {lat: visibleRegion.northeast.lat, lng: visibleRegion.southwest.lng},
        visibleRegion.southwest,
        {lat: visibleRegion.southwest.lat, lng: visibleRegion.northeast.lng}
      ],
      'strokeColor' : 'blue',
      'strokeWidth': 2,
      'fillColor': 'transparent'
    });

  }
}
