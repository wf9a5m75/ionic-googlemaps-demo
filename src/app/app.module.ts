import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/index';
import { MapGetMapPage } from '../pages/map/getmap';
import { MapSetDivPage } from '../pages/map/setdiv';
import { MapSetMapTypeIdPage } from '../pages/map/setmaptypeid';

import { MarkerPage } from '../pages/marker/index';
import { MapAddMarkerPage } from '../pages/marker/addmarker';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    MapGetMapPage,
    MapSetDivPage,
    MapSetMapTypeIdPage,
    MarkerPage,
    MapAddMarkerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    MapGetMapPage,
    MapSetDivPage,
    MapSetMapTypeIdPage,
    MarkerPage,
    MapAddMarkerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
