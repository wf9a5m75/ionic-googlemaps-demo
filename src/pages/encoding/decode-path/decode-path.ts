import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, ILatLng, Encoding
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-decode-path',
  templateUrl: 'decode-path.html',
})

export class DecodePathPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let encodedPath: string = 'c{|xHbo|OSnFrSjW~M{EnFwVz@wy@vQsq@cBoUzJ{EzObBrIcLfE~C~H{Y~C~CfOgY{EjM{EgTcLzTsSwQcGf@IoKgJSkMsb@RkR' +
  'vVkRDon@SooBvBsXbGgE{@{EfE{EwLsXgEo{AcVgw@kRc|A_q@seAcLg@bBvQkCnKcGjCwQsSkM?cL{YjHrS{J~HgOwBgOjf@{Jj' +
  'u@cLjRcGz^oUjW{Tni@f@jRsIj\wBjf@sNbo@wG~iArDnlArIj\bGfr@bQf^~WrSnPvVfOjHnURzc@cQbQzc@nUrtAbBfYkC~M~H' +
  'nZ~Mz^f^_N~MrDbBwQkWsXR{E';

    let points: ILatLng[] = Encoding.decodePath(encodedPath);
    console.log(points);

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: points
      }
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      // Add a polygon
      return this.map.addPolyline({
        'points': points
      });
    });
  }

}
