import {Component, NgZone} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";
import {Observable} from "rxjs";


@IonicPage()
@Component({
  selector: 'page-is-info-window-shown',
  templateUrl: 'is-info-window-shown.html',
})
export class IsInfoWindowShownPage {
  map: GoogleMap;
  data = [
    {
      position: {lng: -122.1180187, lat: 37.3960513},
      title: "Ardis G Egan Intermediate School",
      showInfo: false
    }
    // ,
    // {
    //   position: {lng: -122.1102408, lat: 37.3943847},
    //   title: "Portola School",
    //   showInfo: false
    // },
    // {
    //   position: {lng: -122.0848257, lat: 37.3818032},
    //   title: "Isaac Newton Graham Middle School",
    //   showInfo: false
    // }
  ];
  markers: Marker[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private _ngZone: NgZone) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      var bounds = [];
      this.data.forEach(function (POI) {
        bounds.push(POI.position);
      });

      this.map.moveCamera({
        target: bounds
      });

      Observable.from(this.data)
        .flatMap(item => {
          return this.map.addMarker(item);
        })
        .toArray()
        .subscribe(markers=> {
          this.markers = markers;
          console.log(markers);

          this.markers.forEach((marker,idx)=> {
            console.log(marker.isInfoWindowShown());

            marker.on(GoogleMapsEvent.INFO_OPEN).subscribe((event) => {
              console.log('open ' + idx + ' ' + this.markers[idx].isInfoWindowShown());
              this._ngZone.run(() => {
                this.data[idx].showInfo = this.markers[idx].isInfoWindowShown();
              });
            });

            marker.on(GoogleMapsEvent.INFO_CLOSE).subscribe((event) => {
              console.log('close ' + idx + ' ' + this.markers[idx].isInfoWindowShown());
              this._ngZone.run(() => {
                this.data[idx].showInfo = this.markers[idx].isInfoWindowShown();
              });
            })
          });
        });

    });
  }
}
