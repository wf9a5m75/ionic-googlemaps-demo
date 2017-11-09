import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Environment, GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

/**
 * Generated class for the SetBackgroundColorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-background-color',
  templateUrl: 'set-background-color.html'
})
export class SetBackgroundColorPage {

  map: GoogleMap;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetBackgroundColorPage');
    this.map = GoogleMaps.create('map_canvas');
    Environment.setBackgroundColor('red');
  }

}
