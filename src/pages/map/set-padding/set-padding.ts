import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-set-padding',
  templateUrl: 'set-padding.html',
})
export class SetPaddingPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPaddingPage');
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'camera': {
        'target': {
          'lat': 41.796875,
          'lng': 140.757007
        },
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      // Usage case #1:
      // top = right = bottom = left = 30px
      //map.setPadding( 30 );

      // Usage case #2:
      // top = bottom = 30px
      // left = right = 50px
      //map.setPadding( 30, 50 );

      // Usage case #3:
      // top = 30px
      // left = right = 50px
      // bottom = 20px
      //map.setPadding( 30, 50 , 20 );

      // Usage case #4:
      // top = 30px
      // right = 50px
      // bottom = 20px
      // left = 10px
      this.map.setPadding( 30, 50 , 20 , 10 );
    });
  }

}
