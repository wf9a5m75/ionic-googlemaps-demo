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

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create("map_canvas");
  }

  onButton_click() {
    // Get the current camera position.
    let cameraPosition: CameraPosition<ILatLng> = this.map.getCameraPosition();

    // Show the results
    let text: string = ["Current camera position:\n",
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
