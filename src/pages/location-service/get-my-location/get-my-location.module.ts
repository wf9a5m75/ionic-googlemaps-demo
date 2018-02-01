import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetMyLocationPage } from './get-my-location';

@NgModule({
  declarations: [
    GetMyLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(GetMyLocationPage),
  ],
})
export class GetMyLocationPageModule {}
