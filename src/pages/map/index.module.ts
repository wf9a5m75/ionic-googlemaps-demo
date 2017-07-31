import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './index';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}
