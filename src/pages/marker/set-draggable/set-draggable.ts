import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-set-draggable',
  templateUrl: 'set-draggable.html',
})
export class SetDraggablePage {
  map: GoogleMap;
  marker: Marker;
  isDraggable: boolean = true;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 0,
          lng: 0
        },
        'title': "Drag me!",
        'snippet': "Press a few seconds on this marker",
        'draggable': true
      }).then((marker: Marker) => {
        this.marker = marker;
        this.marker.showInfoWindow();
      });
    });
  }

  toggleDraggable() {
    this.marker.setDraggable(this.isDraggable);
  }
}
