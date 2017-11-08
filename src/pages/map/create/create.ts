import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsMapTypeId } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
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
    this.map1.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

      });
  }

  loadMap2() {
    this.map2 = GoogleMaps.create('map_canvas2', {
      'mapType': GoogleMapsMapTypeId.HYBRID,
      'controls': {
        'compass': true,
        //'myLocationButton': true,
        'indoorPicker': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      camera: {
        target : [
          {lat:41.79883, lng:140.75675},
          {lat:41.799240000000005, lng:140.75875000000002},
          {lat:41.797650000000004, lng:140.75905},
          {lat:41.79637, lng:140.76018000000002},
          {lat:41.79567, lng:140.75845},
          {lat:41.794470000000004, lng:140.75714000000002},
          {lat:41.795010000000005, lng:140.75611},
          {lat:41.79477000000001, lng:140.75484},
          {lat:41.79576, lng:140.75475},
          {lat:41.796150000000004, lng:140.75364000000002},
          {lat:41.79744, lng:140.75454000000002},
          {lat:41.79909000000001, lng:140.75465},
          {lat:41.79883, lng:140.75673}
        ],
        'tilt': 60,
        'bearing': 50
      }
    });
    // Wait the MAP_READY before using any methods.
    this.map2.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log("--> map_canvas2 : ready.");

      });
  }

  loadMap3() {
    this.map3 = GoogleMaps.create('map_canvas3');
    this.map3.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log("--> map_canvas3 : ready.");
      });
  }

  onButtonClick(event) {
    console.log(event);
    alert(event.srcElement.innerText + ' is clicked');
  }

}
