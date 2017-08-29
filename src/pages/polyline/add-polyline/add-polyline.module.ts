import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPolylinePage } from './add-polyline';

@NgModule({
  declarations: [
    AddPolylinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPolylinePage),
  ],
})
export class AddPolylinePageModule {}
