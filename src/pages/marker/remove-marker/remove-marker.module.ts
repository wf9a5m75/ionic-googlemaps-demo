import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveMarkerPage } from './remove-marker';

@NgModule({
  declarations: [
    RemoveMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveMarkerPage),
  ],
})
export class RemoveMarkerPageModule {}
