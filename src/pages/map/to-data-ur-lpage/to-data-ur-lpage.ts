import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the ToDataUrLpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-data-ur-lpage',
  templateUrl: 'to-data-ur-lpage.html',
})
export class ToDataUrLpagePage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDataUrLpagePage');
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas');
  }

  onButtonClick($event) {

    this.map.toDataURL().then(this.showImage);
  }

  showImage(url: string) {
    // Show the image
    let bgDiv: any = document.createElement("div");
    bgDiv.style.position = "fixed";
    bgDiv.style.zIndex = 3;
    bgDiv.style.left = 0;
    bgDiv.style.top = 0;
    bgDiv.style.bottom = 0;
    bgDiv.style.right = 0;
    bgDiv.style.backgroundColor = "rgba(0,0,0,0.5)";

    let img: any = document.createElement("img");
    img.src = url;
    img.style.width = "75%";
    img.style.height = "auto";
    img.style.top = 0;
    img.style.left = 0;
    img.style.right = 0;
    img.style.bottom = 0;
    img.style.margin = "auto";
    img.style.position = "absolute";
    bgDiv.appendChild(img);

    bgDiv.addEventListener("click", function() {
      document.body.removeChild(bgDiv);
      bgDiv = null;
      img = null;
    }, {
      once: true
    });

    document.body.appendChild(bgDiv);

  }

}
