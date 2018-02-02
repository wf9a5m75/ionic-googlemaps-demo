import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HtmlInfoSetBackgroundColorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-html-info-set-background-color',
  templateUrl: 'html-info-set-background-color.html',
})
export class HtmlInfoSetBackgroundColorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HtmlInfoSetBackgroundColorPage');
  }

}
