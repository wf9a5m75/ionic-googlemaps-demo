import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {GoogleMaps} from "@ionic-native/google-maps";
import {LicensePopupPage} from "../pages/environment/get-license-info/license-popup";
import { CustomTag } from "../pages/html-info-window/set-content/set-content";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LicensePopupPage,
    CustomTag
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      locationStrategy: 'none'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LicensePopupPage,
    CustomTag
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
