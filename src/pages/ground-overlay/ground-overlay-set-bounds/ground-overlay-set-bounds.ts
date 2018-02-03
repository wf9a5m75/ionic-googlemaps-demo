import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  ILatLng, GroundOverlay, Marker, BaseArrayClass
} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-ground-overlay-set-bounds',
  templateUrl: 'ground-overlay-set-bounds.html',
})
export class GroundOverlaySetBoundsPage {
  map: GoogleMap;
  groundOverlay: GroundOverlay;
  markers: Marker[] = [];

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let bounds: ILatLng[] = [
      {"lat": 40.712216, "lng": -74.22655},
      {"lat": 40.773941, "lng": -74.12544}
    ];

    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: bounds
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Add ground overlay
      return this.map.addGroundOverlay({
        'url': "assets/newark_nj_1922.jpg",
        'bounds': bounds,
        'opacity': 0.5
      });
    }).then((groundOverlay: GroundOverlay) => {

      this.groundOverlay = groundOverlay;

      let positionList: BaseArrayClass<ILatLng> = new BaseArrayClass<ILatLng>(bounds);
      positionList.mapAsync((position: ILatLng, next: (result: Marker) => void) => {
        this.map.addMarker({
          'position': position,
          'draggable': true
        }).then(next);
      })
      .then((markers: Marker[]) => {
        this.markers = markers;

        markers.forEach((marker: Marker, idx: number) => {
          marker.on("position_changed").subscribe(this.onPositionChanged.bind(this));
        });

      });
    });
  }

  onPositionChanged(params: any[]) {
    // params = [ oldPositon: ILatLng, newPositon: ILatLng, marker: Marker]
    let marker: Marker = params.pop();

    this.groundOverlay.setBounds([
      this.markers[0].getPosition(),
      this.markers[1].getPosition()
    ]);
  }
}
