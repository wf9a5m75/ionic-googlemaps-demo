import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-get-camera-zoom',
  templateUrl: 'get-camera-zoom.html',
})
export class GetCameraZoomPage {
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
    let text:string = "zoom: " + this.map.getCameraZoom();

    let alert = this.alertCtrl.create({
      title: 'Current camera zoom level',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
