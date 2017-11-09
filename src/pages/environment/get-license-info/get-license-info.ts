import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Environment } from '@ionic-native/google-maps';
import { LicensePopupPage } from './license-popup';

/**
 * Generated class for the GetLicenseInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-license-info',
  templateUrl: 'get-license-info.html',
})
export class GetLicenseInfoPage {

  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetLicenseInfoPage');
  }

  onButton_click($event) {
    Environment.getLicenseInfo().then(license => {
      let popup = this.modalCtrl.create(LicensePopupPage, {
        message: license
      });
      popup.present({
        ev: $event
      });
    });
  }

}
