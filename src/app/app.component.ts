import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from "../pages/map/map";
import { MarkerPage } from "../pages/marker/marker";
import { GeocoderPage } from "../pages/geocoder/geocoder";
import { EnvironmentPage } from "../pages/environment/environment";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;  // Do not set any page here. Wait the platform.ready();

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: MapPage },
      { title: 'Marker', component: MarkerPage },
      { title: 'Geocoder', component: GeocoderPage },
      { title: 'Environment', component: EnvironmentPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // You can now use the GoogleMaps plugin in any page without platform.ready() or setTimeout().
      this.rootPage = HomePage;

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
