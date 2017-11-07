import { Component, NgZone } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LicensePopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-license-popup',
  templateUrl: 'license-popup.html',
})
export class LicensePopupPage {
  message: string = '';

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private _ngZone: NgZone
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LicensePopupPage');
    this._ngZone.run(() => {
      this.message = this.navParams.get('message');
    });
  }

  onCloseButton_click() {
    this.viewCtrl.dismiss();
  }
}
