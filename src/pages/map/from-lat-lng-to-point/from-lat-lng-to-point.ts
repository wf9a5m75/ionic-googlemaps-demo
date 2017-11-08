import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  LatLng,
  ILatLng
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-from-lat-lng-to-point',
  templateUrl: 'from-lat-lng-to-point.html'
})
export class FromLatLngToPointPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready to use.");

      let center: ILatLng = this.map.getCameraTarget();
      return this.map.addMarker({
        position: center,
        draggable: true,
        title: "Drag me!"
      });
    })
    .then((marker: Marker) => {
      marker.showInfoWindow();
      marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(this.onMarkerDragEnd);
    });
  }


  onMarkerDragEnd(params: any[]) {
    let latLng: LatLng = <LatLng>params[0];
    let marker:Marker = <Marker>params[1];
    console.log(latLng, marker);

    // LatLng -> Point
    this.map.fromLatLngToPoint(latLng).then((point: any[]) => {

      // Show on the marker
      marker.setTitle("left : " + point[0].toFixed(1) + "px\n" + "top : " + point[1].toFixed(1) + "px");
      marker.showInfoWindow();
    });
  }

}
