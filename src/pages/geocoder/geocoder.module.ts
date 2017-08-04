import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeocoderPage } from './geocoder';

@NgModule({
  declarations: [
    GeocoderPage,
  ],
  imports: [
    IonicPageModule.forChild(GeocoderPage),
  ],
})
export class GeocoderPageModule {}
