import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetCameraBearingPage } from './get-camera-bearing';

@NgModule({
  declarations: [
    GetCameraBearingPage,
  ],
  imports: [
    IonicPageModule.forChild(GetCameraBearingPage),
  ],
})
export class GetCameraBearingPageModule {}
