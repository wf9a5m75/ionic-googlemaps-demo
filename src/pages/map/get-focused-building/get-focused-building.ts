import { Component, NgZone } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-get-focused-building',
  templateUrl: 'get-focused-building.html',
})
export class GetFocusedBuildingPage {
  map: GoogleMap;
  label: string;

  constructor(private _ngZone: NgZone) {}

  ionViewDidLoad() {
    var self = this;
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 37.422375,
          lng: -122.084207
        },
        zoom: 18
      },
      controls: {
        indoorPicker: true
      }
    });

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {

        // Get the current focused building programatically.
        this.map.getFocusedBuilding().then((event) => this.onIndoorEvents([event]));

        // or you can listen the INDOOR_BUILDING_FOCUSED and the INDOOR_LEVEL_ACTIVATED events.
        this.map.on(GoogleMapsEvent.INDOOR_BUILDING_FOCUSED).subscribe((event) => this.onIndoorEvents(event));
        this.map.on(GoogleMapsEvent.INDOOR_LEVEL_ACTIVATED).subscribe((event) => this.onIndoorEvents(event));
      });
  }

  onIndoorEvents(event) {
    console.log(event);
    let indoorBuilding: any = event[0];

    this._ngZone.run(() => {
      this.label = "current floor: " + indoorBuilding.levels[indoorBuilding.activeLevelIndex].name;
    });
  }
}
