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

    let center: ILatLng = this.map.getCameraTarget();
    let marker: Marker = this.map.addMarkerSync({
      position: center,
      draggable: true,
      title: "Drag me!"
    });
    marker.showInfoWindow();
    marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(event => this.onMarkerDragEnd(event));
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
