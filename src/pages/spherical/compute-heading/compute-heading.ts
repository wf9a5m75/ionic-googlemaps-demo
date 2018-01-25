import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Spherical, ILatLng, BaseArrayClass, Marker, Polyline
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-compute-heading',
  templateUrl: 'compute-heading.html',
})
export class ComputeHeadingPage {
  map: GoogleMap;
  label: string;

  constructor(private _ngZone: NgZone) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeHeadingPage');
    this.loadMap();
  }

  loadMap() {

    let positions: ILatLng[] = [
      {"lat": 0, "lng": 0},
      {"lat": 10, "lng": -10}
    ];

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: [
          {"lat": -10, "lng": 10},
          {"lat": 10, "lng": -10}
        ]
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Step1: create two markers
      let positionList: BaseArrayClass<ILatLng> = new BaseArrayClass<ILatLng>(positions);
      positionList.mapAsync((position: ILatLng, next: (result: any) => void) => {
        this.map.addMarker({
          position: position
        }).then(next);
      }).then((markers: Marker[]) => {

        // Step2: add a polyline
        this.map.addPolyline({
          points: positions
        }).then((polyline: Polyline) => {

          // Step3: Calculate heading from markers[0] to markers[1] when you drag the markers[1]
          let points: BaseArrayClass<ILatLng> = polyline.getPoints();
          let basePosition: ILatLng = markers[0].getPosition();

          // Allow draggable
          markers[1].setDraggable(true);
          markers[1].on('position_changed').subscribe((params: any[]) => {
            // params = [latLng, marker]
            let draggedPosition: ILatLng = params[0];

            // update the polyline
            points.setAt(1, draggedPosition);

            // redraw the label
            this._ngZone.run(() => {
              this.label = "heading: " + Spherical.computeHeading(basePosition, draggedPosition).toFixed(0) + "°";
            });
          });
        });
      });
    });
  }
}
