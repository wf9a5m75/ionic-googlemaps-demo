import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Spherical, ILatLng, BaseArrayClass, Marker, Polygon
} from '@ionic-native/google-maps';

/**
 * Generated class for the ComputeAreaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compute-area',
  templateUrl: 'compute-area.html',
})
export class ComputeAreaPage {
  map: GoogleMap;
  label: string;

  constructor(private _ngZone: NgZone) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputeAreaPage');
    this.loadMap();
  }

  loadMap() {

    let GORYOKAKU_POINTS: ILatLng[] = [
      {lat: 41.79883, lng: 140.75675},
      {lat: 41.799240000000005, lng: 140.75875000000002},
      {lat: 41.797650000000004, lng: 140.75905},
      {lat: 41.79637, lng: 140.76018000000002},
      {lat: 41.79567, lng: 140.75845},
      {lat: 41.794470000000004, lng: 140.75714000000002},
      {lat: 41.795010000000005, lng: 140.75611},
      {lat: 41.79477000000001, lng: 140.75484},
      {lat: 41.79576, lng: 140.75475},
      {lat: 41.796150000000004, lng: 140.75364000000002},
      {lat: 41.79744, lng: 140.75454000000002},
      {lat: 41.79909000000001, lng: 140.75465}
    ];

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: GORYOKAKU_POINTS
      }
    });
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Step1: Create a polygon
      return this.map.addPolygon({
        'points': GORYOKAKU_POINTS,
        'strokeColor' : '#AA00FF',
        'fillColor' : '#00FFAA',
        'width': 10
      });
    }).then((polygon: Polygon) => {

      // The polygon.getPoints() method returns an instance of the BaseArrayClass.
      let points: BaseArrayClass<ILatLng> = polygon.getPoints();

      // If `points_changed` event is occurred, recalculate the dimension.
      polygon.on('points_changed').subscribe(() => {

        let dimension: number = Spherical.computeArea(points.getArray());

        // redraw the label
        this._ngZone.run(() => {
          this.label = "area: " + dimension.toFixed(2) + "(m²)";
        });
      });

      // Add draggable markers
      points.mapAsync((position: ILatLng, next: (result: Marker) => void) => {
        this.map.addMarker({
          position: position,
          draggable: true
        }).then(next);
      }).then((markers: Marker[]) => {

        markers.forEach((marker: Marker, idx: number) => {
          marker.on("position_changed").subscribe((params: any[]) => {
            // params = [oldPosition: ILatLng, newPosition: ILatLng, marker: Marker]
            let newPosition: ILatLng = params[1];

            // Redraw the polygon automatically
            points.setAt(idx, newPosition);

            // Recalculate the dimension
            polygon.trigger("points_changed");
          });
        });
      });

      // Calculate the dimension for initialization
      polygon.trigger("points_changed");
    });
  }
}
