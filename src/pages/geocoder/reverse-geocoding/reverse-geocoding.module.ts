import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReverseGeocodingPage } from './reverse-geocoding';

@NgModule({
  declarations: [
    ReverseGeocodingPage,
  ],
  imports: [
    IonicPageModule.forChild(ReverseGeocodingPage),
  ],
})
export class ReverseGeocodingPageModule {}
