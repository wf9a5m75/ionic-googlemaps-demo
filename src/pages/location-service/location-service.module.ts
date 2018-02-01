import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationServicePage } from './location-service';

@NgModule({
  declarations: [
    LocationServicePage,
  ],
  imports: [
    IonicPageModule.forChild(LocationServicePage),
  ],
})
export class LocationServicePageModule {}
