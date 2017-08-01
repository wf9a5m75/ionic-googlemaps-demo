import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMarkerPage } from './add-marker';

@NgModule({
  declarations: [
    AddMarkerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMarkerPage),
  ],
})
export class AddMarkerPageModule {}
