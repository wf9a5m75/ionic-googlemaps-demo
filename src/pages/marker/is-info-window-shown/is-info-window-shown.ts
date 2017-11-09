import {Component, NgZone} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Marker, BaseArrayClass
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-is-info-window-shown',
  templateUrl: 'is-info-window-shown.html',
})
export class IsInfoWindowShownPage {
  map: GoogleMap;
  data: any[] = [
    {
      position: {lng: -122.1180187, lat: 37.3960513},
      title: "Ardis G Egan Intermediate School",
      showInfo: false
    },
    {
      position: {lng: -122.1102408, lat: 37.3943847},
      title: "Portola School",
      showInfo: false
    },
    {
      position: {lng: -122.0848257, lat: 37.3818032},
      title: "Isaac Newton Graham Middle School",
      showInfo: false
    }
  ];
  markers: Marker[];

  constructor(private _ngZone: NgZone) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      var bounds = [];
      this.data.forEach(function (POI) {
        bounds.push(POI.position);
      });

      this.map.moveCamera({
        target: bounds
      });

      let mvcArray = new BaseArrayClass(this.data);
      return mvcArray.mapAsync((item: any, next: (marker: Marker) => void) => {
        this.map.addMarker(item).then(next);
      });
    })
    .then((markers: Marker[]) => {
      this.markers = markers;
      console.log(markers);

      this.markers.forEach((marker,idx)=> {
        marker.set('idx', idx);
        marker.on(GoogleMapsEvent.INFO_OPEN).subscribe(event => this.onInfoOpenClose(event));
        marker.on(GoogleMapsEvent.INFO_CLOSE).subscribe(event => this.onInfoOpenClose(event));
      });
    });
  }

  onInfoOpenClose(params: any[]) {
    let marker: Marker = params[0];
    let idx: number = marker.get('idx');
    let status: string = this.markers[idx].isInfoWindowShown() ? 'open': 'close';
    console.log(status + ' ' + idx);
    this._ngZone.run(() => {
      this.data[idx].showInfo = this.markers[idx].isInfoWindowShown();
    });
  }
}
