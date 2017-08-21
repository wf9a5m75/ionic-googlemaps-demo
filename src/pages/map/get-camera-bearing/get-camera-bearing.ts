import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-get-camera-bearing',
  templateUrl: 'get-camera-bearing.html',
})
export class GetCameraBearingPage {
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    setTimeout(this.loadMap.bind(this), 1000);
  }
  loadMap() {
    this.map = this.googleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 37.422858,
          lng: -122.085065
        },
        zoom: 0,
        bearing: 150
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('map is ready');
    })
  }

  onButton_click() {
    // Show the current camera bearing.
    var text = "bearing: " + this.map.getCameraBearing();

    let alert = this.alertCtrl.create({
      title: 'Current camera zoom level',
      subTitle: text,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
