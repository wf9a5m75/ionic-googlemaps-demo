import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetVisibleRegionPage } from './get-visible-region';

@NgModule({
  declarations: [
    GetVisibleRegionPage,
  ],
  imports: [
    IonicPageModule.forChild(GetVisibleRegionPage),
  ],
})
export class GetVisibleRegionPageModule {}
