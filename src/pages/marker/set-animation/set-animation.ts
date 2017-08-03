import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation} from "@ionic-native/google-maps";


@IonicPage()
@Component({
  selector: 'page-set-animation',
  templateUrl: 'set-animation.html',
})
export class SetAnimationPage {
  map: GoogleMap;
  marker: Marker;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: {lat: 35, lng: 137},
        zoom: 15
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.map.addMarker({
        position: {
          lat: 35,
          lng: 137
        },
        icon: "http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png",
        animation: GoogleMapsAnimation.DROP
      }).then((marker: Marker) => {
        this.marker = marker;
        this.marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(()=> {
          this.marker.setAnimation(GoogleMapsAnimation.BOUNCE);
        })
      });
    });
  }

  animateMarker() {
    this.marker.setAnimation(GoogleMapsAnimation.DROP);
  }
}
