import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Geocoder,
  BaseArrayClass,
  GeocoderResult,
  LatLngBounds,
  Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-geocoding',
  templateUrl: 'geocoding.html'
})
export class GeocodingPage {
  map1: GoogleMap;
  map2: GoogleMap;

  isRunning: boolean = false;
  search_address: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.loadMap1();
    this.loadMap2();
  }
  loadMap1() {
    this.search_address = 'Kyoto, Japan';
    this.map1 = GoogleMaps.create('map_canvas1');

    // Wait the MAP_READY before using any methods.
    this.map1.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map ready for map_canvas1");
    });
  }

  onButton1_click(event) {

    // Address -> latitude,longitude
    Geocoder.geocode({
      "address": this.search_address
    }).then((results: GeocoderResult[]) => {
      console.log(results);

      if (!results.length) {
        this.isRunning = false;
        return null;
      }

      // Add a marker
      return this.map1.addMarker({
        'position': results[0].position,
        'title':  JSON.stringify(results[0].position)
      });
    })
    .then((marker: Marker) => {

      // Move to the position
      this.map1.animateCamera({
        'target': marker.getPosition(),
        'zoom': 17
      }).then(() => {
        marker.showInfoWindow();
        this.isRunning = false;
      });

    });
  }

  loadMap2() {
    this.map2 = GoogleMaps.create('map_canvas2', {
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

    let start: number = Date.now();

    // Geocode multiple location
    Geocoder.geocode({

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


      mvcArray.one('finish').then(() => {
        console.log('finish', mvcArray.getArray());
        return mvcArray.mapAsync((result: GeocoderResult[], next: (marker: Marker) => void) => {
          if (result.length === 0) {
            // Geocoder can not get the result
            return next(null);
          }
          this.map2.addMarker({
            'position': result[0].position,
            'title':  JSON.stringify(result)
          }).then(next);
        });
      })
      .then((markers: Marker[]) => {
        let end = Date.now();
        this.isRunning = false;
        alert("duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
      });

    });
  }
}
