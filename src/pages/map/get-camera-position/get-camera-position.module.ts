import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCameraPositionPage } from './get-camera-position';

@NgModule({
  declarations: [
    GetCameraPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(GetCameraPositionPage),
  ],
})
export class GetCameraPositionPageModule {}
