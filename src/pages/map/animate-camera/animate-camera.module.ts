import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimateCameraPage } from './animate-camera';

@NgModule({
  declarations: [
    AnimateCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimateCameraPage),
  ],
})
export class AnimateCameraPageModule {}
