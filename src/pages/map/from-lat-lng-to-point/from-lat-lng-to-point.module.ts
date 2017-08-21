import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FromLatLngToPointPage } from './from-lat-lng-to-point';

@NgModule({
  declarations: [
    FromLatLngToPointPage,
  ],
  imports: [
    IonicPageModule.forChild(FromLatLngToPointPage),
  ],
})
export class FromLatLngToPointPageModule {}
