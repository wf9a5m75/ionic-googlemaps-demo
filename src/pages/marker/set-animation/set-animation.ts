import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  Marker, GoogleMapsAnimation
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-set-animation',
  templateUrl: 'set-animation.html',
})
export class SetAnimationPage {
  map: GoogleMap;
  marker: Marker;

  constructor() {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: 35, lng: 137},
        zoom: 15
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.marker = this.map.addMarkerSync({
        position: {
          lat: 35,
          lng: 137
        },
        icon: "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png",
        animation: GoogleMapsAnimation.DROP
      });

      this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(()=> {
        this.marker.setAnimation(GoogleMapsAnimation.BOUNCE);
      });
    });
  }

  animateMarker() {
    this.marker.setAnimation(GoogleMapsAnimation.DROP);
  }
}
