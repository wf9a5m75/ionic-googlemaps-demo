import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SphericalPage } from './spherical';

@NgModule({
  declarations: [
    SphericalPage,
  ],
  imports: [
    IonicPageModule.forChild(SphericalPage),
  ],
})
export class SphericalPageModule {}
