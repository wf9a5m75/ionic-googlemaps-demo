import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Spherical, ILatLng, BaseArrayClass, Marker, Circle
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-compute-distance-between',
  templateUrl: 'compute-distance-between.html',
})
export class ComputeDistanceBetweenPage {
  map: GoogleMap;
  label: string;

  constructor(private _ngZone: NgZone) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeDistanceBetweenPage');
    this.loadMap();
  }

  loadMap() {
    let center: ILatLng = {"lat": 32, "lng": -97};

    // radius (meter)
    let radius: number = 300;

    // Calculate the positions
    let deg0: ILatLng = Spherical.computeOffset(center, radius, 0);
    let deg90: ILatLng = Spherical.computeOffset(center, radius, 90);
    let deg180: ILatLng = Spherical.computeOffset(center, radius, 180);
    let deg270: ILatLng = Spherical.computeOffset(center, radius, 270);

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: [deg0, deg90, deg180, deg270],
        padding: 100
      },
      controls: {
        myLocation: true,
        myLocationButton: false
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      return this.map.addMarker({
        'position': deg0,
        'draggable': true,
        'title': 'Drag me!'
      });

    }).then((marker: Marker) => {
      marker.showInfoWindow();

      // Add circle
      return this.map.addCircle({
        'center': center,
        'radius': radius,
        'strokeColor' : '#AA00FF',
        'strokeWidth': 5,
        'fillColor' : '#00880055'
      }).then((circle: Circle) => {

        circle.on('radius_changed').subscribe((params: any[]) => {
          // params = [prevRadius: number, newRadius: number, circle: Circle];

          // redraw the label
          this._ngZone.run(() => {
            this.label = "radius: " + params[1].toFixed(2) + "(m)";
          });
        });

        marker.on('position_changed').subscribe((params: any[]) => {
          // params = [prevPosition: ILatLng, newPosition: ILatLng, marker: Marker];

          // Calculate distance between center and the marker position
          let newRadius: number = Spherical.computeDistanceBetween(center, params[1]);

          // Update the circle radius
          circle.setRadius(newRadius);
        });

      });

    });
  }
}
