import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapAddMarkerPage } from './addmarker';

@NgModule({
  declarations: [
    MapAddMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(MapAddMarkerPage),
  ],
})
export class MapAddMarkerPageModule {}
