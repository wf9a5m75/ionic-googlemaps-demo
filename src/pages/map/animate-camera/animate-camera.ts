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
  selector: 'page-animate-camera',
  templateUrl: 'animate-camera.html',
  providers: [
    Geocoder
  ]
})
export class AnimateCameraPage {
  map: GoogleMap;
  mapTypeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private geocoder: Geocoder) {}

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: [
          {"lat": 21.306944, "lng": -157.858333},
          {"lat": 47.037874, "lng": -69.779490}
        ]
      }
    });

    // Wait the MAP_READY before using any methods.
    let self = this;
    let start = Date.now();
    let isRunning = false;
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

      // Geocode multiple location
      self.geocoder.geocode({

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

              self.map.addMarker({
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
            isRunning = false;
          });

          markers.on('insert_at').subscribe((index) => {
            if (!isRunning && markers.getLength() === mvcArray.getLength()) {
              let end = Date.now();
              alert("results : " + mvcArray.getLength() + "\n" +
                    "duration: " + ((end - start) / 1000).toFixed(1) + " seconds");
            }
          });
      });
    });
  }

}
