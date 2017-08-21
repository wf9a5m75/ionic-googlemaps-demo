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

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    setTimeout(this.loadMap.bind(this), 1000);
  }
  loadMap() {

    this.map = this.googleMaps.create("map_canvas");
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("map is ready");
    });

  }

  onButton_click() {
    var text = "zoom: " + this.map.getCameraZoom();

    let alert = this.alertCtrl.create({
      title: 'Current camera zoom level',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
