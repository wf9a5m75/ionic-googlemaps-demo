import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCameraZoomPage } from './get-camera-zoom';

@NgModule({
  declarations: [
    GetCameraZoomPage,
  ],
  imports: [
    IonicPageModule.forChild(GetCameraZoomPage),
  ],
})
export class GetCameraZoomPageModule {}
