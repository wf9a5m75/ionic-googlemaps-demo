import {Component, NgZone} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {
  GoogleMaps, GoogleMap,
  GoogleMapsEvent, ILatLng, Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-position',
  templateUrl: 'get-position.html',
})
export class GetPositionPage {
  map: GoogleMap;
  markerPosition: ILatLng;

  constructor(private _ngZone: NgZone) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      gestures: {
        scroll: false  // Disable map dragging
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        return this.map.addMarker({
          position: {
            lat: 0,
            lng: 0
          },
          draggable: true,
          title: "Drag me!"
        });
      })
      .then((marker: Marker) => {
        this.markerPosition = marker.getPosition();

        marker.on(GoogleMapsEvent.MARKER_DRAG_START).subscribe(this.onMarkerMove);
        marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe(this.onMarkerMove);
        marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(this.onMarkerMove);
      });
  }

  onMarkerMove(event) {
    // event[0] : LatLng
    // event[1] : Marker
    this._ngZone.run(() => {
      this.markerPosition = event[0];
    });
  }
}
