import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {GoogleMaps} from "@ionic-native/google-maps";
import {LicensePopupPage} from "../pages/environment/get-license-info/license-popup";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LicensePopupPage
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
    LicensePopupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
