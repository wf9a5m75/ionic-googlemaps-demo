import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Geocoder,
  BaseArrayClass,
  GeocoderResult,
  LatLngBounds
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-geocoding-camera',
  templateUrl: 'geocoding.html',
  providers: [
    Geocoder
  ]
})
export class GeocodingPage {
  map1: GoogleMap;
  map2: GoogleMap;
  mapTypeId: any;
  isRunning: boolean = false;
  search_address: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geocoder: Geocoder) {}

  ionViewDidLoad() {
    this.loadMap1();
    setTimeout(this.loadMap2.bind(this), 2000);
  }
  loadMap1() {
    this.search_address = 'Kyoto, Japan';
    this.map1 = this.googleMaps.create('map_canvas1');

    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map ready for map_canvas1");
    });
  }

  onButton1_click(event) {
    let self = this;

    // Address -> latitude,longitude
    self.geocoder.geocode({
      "address": this.search_address
    }).then((results: GeocoderResult[]) => {
      console.log(results);

      if (results.length) {

        // Add a marker
        self.map1.addMarker({
          'position': results[0].position,
          'title':  JSON.stringify(results[0].position)
        }).then((marker) => {

          // Move to the position
          self.map1.animateCamera({
            'target': results[0].position,
            'zoom': 17
          }).then(() => {
            marker.showInfoWindow();
            self.isRunning = false;
          });

        });

      } else {
        self.isRunning = false;
      }

    });
  }

  loadMap2() {
    this.map2 = this.googleMaps.create('map_canvas2', {
      camera: {
        target: [
          {"lat": 21.306944, "lng": -157.858333},
          {"lat": 47.037874, "lng": -69.779490}
        ]
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map2.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map ready for map_canvas2");
    });
  }


  onButton2_click(event) {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;

    let self = this;
    let start = Date.now();

    // Geocode multiple location
    this.geocoder.geocode({

      // US Capital cities
      "address": [
        "Montgomery, AL, USA", "Juneau, AK, USA", "Phoenix, AZ, USA",
        "Little Rock, AR, USA", "Sacramento, CA, USA", "Denver, CO, USA",
        "Hartford, CT, USA", "Dover, DE, USA", "Washington, DC, USA",
        "Tallahassee, FL, USA", "Atlanta, GA, USA", "Honolulu, HI, USA",
        "Boise, ID, USA", "Springfield, IL, USA", "Indianapolis, IN, USA",
        "Des Moines, IA, USA", "Topeka, KS, USA", "Frankfort, KY, USA",
        "Baton Rouge, LA, USA", "Augusta, ME, USA", "Annapolis, MD, USA",
        "Boston, MA, USA", "Lansing, MI, USA", "Saint Paul, MN, USA",
        "Jackson, MS, USA", "Jefferson City, MO, USA", "Helena, MT, USA",
        "Lincoln, NE, USA", "Carson City, NV, USA", "Concord, NH, USA",
        "Trenton, NJ, USA", "Santa Fe, NM, USA", "Albany, NY, USA",
        "Raleigh, NC, USA", "Bismarck, ND, USA", "Columbus, OH, USA",
        "Oklahoma City, OK, USA", "Salem, OR, USA", "Harrisburg, PA, USA",
        "Providence, RI, USA", "Columbia, SC, USA", "Pierre, SD, USA",
        "Nashville, TN, USA", "Austin, TX, USA", "Salt Lake City, UT, USA",
        "Montpelier, VT, USA", "Richmond, VA, USA", "Olympia, WA, USA",
        "Charleston, WV, USA", "Madison, WI, USA", "Cheyenne, Wyoming, USA"
      ]
    }).then((mvcArray: BaseArrayClass<GeocoderResult>) => {

        let latLngBounds = new LatLngBounds();
        let markers = new BaseArrayClass();

        mvcArray.on('error').subscribe((error) => {
          console.log(error);
        });

        mvcArray.on('insert_at').subscribe((index: number) => {

          // Get a result
          let geocodeResult = mvcArray.getAt(index);
          if (geocodeResult.length > 0) {

            latLngBounds.extend(geocodeResult[0].position);

            self.map2.addMarker({
              'position': geocodeResult[0].position,
              'title':  JSON.stringify(geocodeResult)
            }).then((marker) => {
              markers.push(marker);
            });
          } else {
            markers.push(null);
          }
        });

        mvcArray.on('finish').subscribe(() => {
          self.isRunning = false;
        });

        markers.on('insert_at').subscribe((index) => {
          if (!self.isRunning && markers.getLength() === mvcArray.getLength()) {
            let end = Date.now();
            alert("results : " + mvcArray.getLength() + "\n" +
                  "duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
          }
        });
    });
  }
}
