import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-marker',
  templateUrl: 'marker.html',
})
export class MarkerPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarkerPage');
  }

}
