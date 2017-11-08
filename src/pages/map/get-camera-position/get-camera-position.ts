import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-camera-position',
  templateUrl: 'get-camera-position.html',
})
export class GetCameraPositionPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    var self = this;
    setTimeout(this.loadMap.bind(self), 1000);
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

    });
  }

  onButton_click() {
    // Get the current camera position.
    var cameraPosition: any = this.map.getCameraPosition();

    // Show the results
    var text = ["Current camera position:\n",
      "-------------------------------",
      "latitude:" + cameraPosition.target.lat,
      "longitude:" + cameraPosition.target.lng,
      "zoom:" + cameraPosition.zoom,
      "tilt:" + cameraPosition.tilt,
      "bearing:" + cameraPosition.bearing].join("<br>\n");

    let alert = this.alertCtrl.create({
      title: 'Current camera target',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
