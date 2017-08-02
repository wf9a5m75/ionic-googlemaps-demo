import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private _ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      gestures: {
        scroll: false  // Disable map dragging
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        draggable: true,
        title: "Drag me!"
      }).then((marker: Marker) => {
        this.markerPosition = marker.getPosition();

        var onMarkerMove = event => {
          this._ngZone.run(() => {
            this.markerPosition = event;
          });
        };

        marker.on(GoogleMapsEvent.MARKER_DRAG_START).subscribe(onMarkerMove);
        marker.on(GoogleMapsEvent.MARKER_DRAG).subscribe(onMarkerMove);
        marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(onMarkerMove);
      });
    });
  }
}
