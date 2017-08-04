import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCameraTargetPage } from './get-camera-target';

@NgModule({
  declarations: [
    GetCameraTargetPage,
  ],
  imports: [
    IonicPageModule.forChild(GetCameraTargetPage),
  ],
})
export class GetCameraTargetPageModule {}
