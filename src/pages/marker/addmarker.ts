import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  BaseArrayClass,
  HtmlInfoWindow
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-map-addmarker',
  templateUrl: 'addmarker.html',
  providers: [
    GoogleMaps
  ]
})
export class MapAddMarkerPage {
  map1: GoogleMap;
  map2: GoogleMap;
  map3: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    this.loadMap1();
    setTimeout(this.loadMap2.bind(this), 1000);
    setTimeout(this.loadMap3.bind(this), 2000);
  }
  loadMap1() {
    this.map1 = this.googleMaps.create('map_canvas1');

    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

         this.map1.addMarker({
           position: {
              lat: 0,
              lng: 0
            }
          })
          .then(marker => { });
      });
  }

  loadMap2() {
    this.map2 = this.googleMaps.create('map_canvas2');

    // Wait the MAP_READY before using any methods.
    this.map2.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

         this.map2.addMarker({
           position: {
              lat: 0,
              lng: 0
            },
            title: "Hello Cordova Google Maps\\n for iOS and Android",
            snippet: "This plugin is awesome!"
          })
          .then(marker => {
            // Display the infoWindow
            marker.showInfoWindow();
          });
      });
  }

  loadMap3() {
    this.map3 = this.googleMaps.create('map_canvas3');
    this.map3.one(GoogleMapsEvent.MAP_READY)
      .then(() => {


        let data: any = [
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
        let baseArrayClass:any = new BaseArrayClass(data);

        baseArrayClass.map((options:any, cb:any) => {
          // The variable "options" contains each element of the data.
          //
          // The variable "cb" is a callback function of interation.
          options.mytitle = options.title;
          delete options.title;
          this.map3.addMarker(options).then(cb);

        }, (markers) => {

          let htmlInfoWindow:any = new HtmlInfoWindow();

          markers.forEach((marker) => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                htmlInfoWindow.setContent(marker.get("mytitle"));
                htmlInfoWindow.open(marker);
              });
          });

          // Set camera position that include all markers.
          let bounds:any = [];
          data.forEach((POI: any) => {
            bounds.push(POI.position);
          });

          this.map3.moveCamera({
            target: bounds
          });

        });

      });
  }

}
