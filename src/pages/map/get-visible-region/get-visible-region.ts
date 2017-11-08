import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, VisibleRegion } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-visible-region',
  templateUrl: 'get-visible-region.html',
})
export class GetVisibleRegionPage {
  map: GoogleMap;

  constructor() { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
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

    // Get the visible region
    let visibleRegion: VisibleRegion = this.map.getVisibleRegion();

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
        this.map.animateCameraZoomOut()
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
