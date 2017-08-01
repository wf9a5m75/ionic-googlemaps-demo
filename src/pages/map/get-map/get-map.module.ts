import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetMapPage } from './get-map';

@NgModule({
  declarations: [
    GetMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GetMapPage),
  ],
})
export class GetMapPageModule {}
