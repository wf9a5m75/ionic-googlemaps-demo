import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition
} from "@ionic-native/google-maps";

/**
 * Generated class for the GetMyLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-get-my-location",
  templateUrl: "get-my-location.html"
})
export class GetMyLocationPage {
  map: GoogleMap;
  onLoading: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps
  ) {}

  ionViewDidLoad() {
    var self = this;
    self.loadMap();
  }
  loadMap() {
    this.map = this.googleMaps.create("map_canvas");

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Map is ready!");
      this.onLoading = false;
    });
  }

  onButtonClick(event) {
    if (this.map) {
      this.map.getMyLocation()
      .then((resp) => {
        let location = new LatLng(resp.latLng.lat, resp.latLng.lng);
        let position: CameraPosition = {
          target: location,
          zoom: 15,
          tilt: 30
        };

        // move the map's camera to position
        this.map.moveCamera(position);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
}
