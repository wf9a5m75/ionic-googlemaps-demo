import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoveCameraPage } from './move-camera';

@NgModule({
  declarations: [
    MoveCameraPage,
  ],
  imports: [
    IonicPageModule.forChild(MoveCameraPage),
  ],
})
export class MoveCameraPageModule {}
