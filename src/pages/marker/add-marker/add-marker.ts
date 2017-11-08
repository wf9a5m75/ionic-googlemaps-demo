import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  BaseArrayClass,
  HtmlInfoWindow
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-add-marker',
  templateUrl: 'add-marker.html',
})
export class AddMarkerPage {
  map1: GoogleMap;
  map2: GoogleMap;
  map3: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap1();
    this.loadMap2();
    this.loadMap3();
  }

  loadMap1() {
    this.map1 = GoogleMaps.create('map_canvas1');

    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map1.addMarker({
        position: {
          lat: 0,
          lng: 0
        }
      });
    });
  }

  loadMap2() {
    this.map2 = GoogleMaps.create('map_canvas2');

    // Wait the MAP_READY before using any methods.
    this.map2.one(GoogleMapsEvent.MAP_READY).then(() => {

      return this.map2.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        title: "Hello Cordova Google Maps\\n for iOS and Android",
        snippet: "This plugin is awesome!"
      });
    })
    .then((marker: Marker) => {
      // Display the infoWindow
      marker.showInfoWindow();
    });
  }

  loadMap3() {
    this.map3 = GoogleMaps.create('map_canvas3');
    this.map3.one(GoogleMapsEvent.MAP_READY).then(() => {

      let data: any[] = [
        {
          position: {lng: -122.1180187, lat: 37.3960513},
          title: "Ardis G Egan Intermediate School"
        },
        {
          position: {lng: -122.1102408, lat: 37.3943847},
          title: "Portola School"
        },
        {
          position: {lng: -122.0848257, lat: 37.3818032},
          title: "Isaac Newton Graham Middle School"
        },
        {
          position: {lng: -122.1082962, lat: 37.3863294},
          title: "Los Altos High School"
        },
        {
          position: {lng: -122.013571, lat: 37.3874409},
          title: "The Kings Academy"
        },
        {
          position: {lng: -122.082462, lat: 37.3627189},
          title: "Georgina P Blach Intermediate School"
        },
        {
          position: {lng: -122.0421832, lat: 37.3766077},
          title: "Benner Junior High School"
        }
      ];

      // Add markers
      let baseArrayClass: any = new BaseArrayClass(data);

      return baseArrayClass.mapAsync((options: any, next: (marker: Marker) => void) => {
        options.mytitle = options.title;
        delete options.title;
        this.map3.addMarker(options).then(next);

      });
    })
    .then(markers: Marker[]) => {

      let htmlInfoWindow: HtmlInfoWindow = new HtmlInfoWindow();

      let bounds: any[] = [];
      markers.forEach((marker: Marker) => {
        bounds.push(marker.getPosition());

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.setContent(marker.get("mytitle"));
          htmlInfoWindow.open(marker);
        });
      });

      this.map3.moveCamera({
        target: bounds
      });

    });

  }

}
