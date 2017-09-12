import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetFocusedBuildingPage } from './get-focused-building';

@NgModule({
  declarations: [
    GetFocusedBuildingPage,
  ],
  imports: [
    IonicPageModule.forChild(GetFocusedBuildingPage),
  ],
})
export class GetFocusedBuildingPageModule {}
