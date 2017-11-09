import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the GeocoderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geocoder',
  templateUrl: 'geocoder.html',
})
export class GeocoderPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeocoderPage');
  }

}
