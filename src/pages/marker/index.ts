import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapAddMarkerPage } from './addmarker';
/*
import { MarkerGetPositionPage } from './getposition';
import { MarkerShowInfoWindowPage } from './showinfowindow';
import { MarkerHideInfoWindowPage } from './hideinfowindow';
import { MarkerSetAnimationPage } from './setanimation';
import { MarkerIsVisiblePage } from './isvisible';
import { MarkerSetTitlePage } from './settitle';
import { MarkerSetSnippetPage } from './setsnippet';
import { MarkerRemovePage } from './remove';
import { MarkerSetIconAnchorPage } from './seticonanchor';
import { MarkerSetInfoWindowAnchorPage } from './setinfowndowanchor';
import { MarkerIsInfoWindowShownPage } from './isinfowindowshown';
import { MarkerSetOpacityPage } from './setopacity';
import { MarkerSetZIndexPage } from './setzindex';
import { MarkerSetVisiblePage } from './setvisible';
import { MarkerSetDraggablePage } from './setdraggable';
import { MarkerSetDisableAutoPanPage } from './setdisableautopan';
import { MarkerSetPositionPage } from './setposition';
import { MarkerSetRotationPage } from './setrotation';
import { MarkerSetFlatPage } from './setflat';
import { MarkerSetIconPage } from './seticon';
*/

@IonicPage()
@Component({
  selector: 'page-marker',
  templateUrl: 'index.html',
})

export class MarkerPage {
  addMarker: any;
  getPosition: any;
  showInfoWindow: any;
  hideInfoWindow: any;
  setAnimation: any;
  isVisible: any;
  setTitle: any;
  setSnippet: any;
  remove: any;
  setIconAnchor: any;
  setInfoWindowAnchor: any;
  isInfoWindowShown: any;
  setOpacity: any;
  setZIndex: any;
  setVisible: any;
  setDraggable: any;
  setDisableAutoPan: any;
  setPosition: any;
  setRotation: any;
  setFlat: any;
  setIcon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addMarker = MapAddMarkerPage;
/*
    this.this.getPosition = MarkerGetPositionPage;
    this.showInfoWindow = MarkerShowInfoWindowPage;
    this.hideInfoWindow = MarkerHideInfoWindowPage;
    this.this.setAnimation = MarkerSetAnimationPage;
    this.isVisible = MarkerIsVisiblePage;
    this.setTitle = MarkerSetTitlePage;
    this.setSnippet = MarkerSetSnippetPage;
    this.remove = MarkerRemovePage;
    this.setIconAnchor = MarkerSetIconAnchorPage;
    this.setInfoWindowAnchor = MarkerSetInfoWindowAnchorPage;
    this.isInfoWindowShown = MarkerSetInfoWindowAnchorPage;
    this.setOpacity = MarkerSetOpacityPage;
    this.setZIndex = MarkerSetZIndexPage;
    this.setVisible = MarkerSetVisiblePage;
    this.setDraggable = MarkerSetDraggablePage;
    this.setDisableAutoPan = MarkerSetDisableAutoPanPage;
    this.setPosition = MarkerSetPositionPage;
    this.setRotation = MarkerSetRotationPage;
    this.setFlat = MarkerSetFlatPage;
    this.setIcon = MarkerSetIconPage;
*/
  }

  ionViewDidLoad() {}

}
