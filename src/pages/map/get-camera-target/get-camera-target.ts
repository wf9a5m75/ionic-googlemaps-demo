import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-get-camera-target',
  templateUrl: 'get-camera-target.html',
})
export class GetCameraTargetPage {
  map: GoogleMap;

  constructor(private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  onButton_click() {
    // Show the current camera target position.
    let target: ILatLng = this.map.getCameraTarget();

    let alert = this.alertCtrl.create({
      title: 'Current camera target',
      subTitle: [
        "lat: " + target.lat,
        "lng: " + target.lng
      ].join("<br />"),
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
